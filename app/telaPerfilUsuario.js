import React, { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import { signOut} from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View, TextInput, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles/styles_Perfil';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';

const TelaPerfilUsuario = () => {
    const [userName, setUserName] = useState('');
    const [userCode, setUserCode] = useState('');
    const [senhaAtual, setSenhaAtual] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [hideCurretPass, setHideCurretPass] = useState(true);
    const [hideNewPass, setHideNewPass] = useState(true);
    const [avatar, setAvatar] = useState(null);
    const router = useRouter();

    //Implementação do usuário do codigo do usuário
    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setUserName(user.email || 'Email'); // Se o nome não estiver disponível, exibe "Usuário"
            setUserCode(user.uid); // Usando o UID do Firebase como código
        }
    }, []);
    // Fim da implementação

    // Implementação de logout
    const handleSair = async () => {
        try {
        await signOut(auth);
        router.replace('/');
        } catch (error) {
        console.error(error.code);
        console.error(error.message);
        }
    }
    // Fim da implementação 

    // Implementação de atualizar senha do usuário
    const handleChangePassword = async () => {
        const user = auth.currentUser;

        if (!user) {
            Alert.alert('Erro', 'Nenhum usuário autenticado');
            return;
        }

        // Reautenticar o usuário
        const credential = EmailAuthProvider.credential(user.email, senhaAtual);

        try {
            await reauthenticateWithCredential(user, credential);
            // Atualizar a senha
            await updatePassword(user, novaSenha);
            Alert.alert('Sucesso', 'Senha alterada com sucesso!');
        } catch (error) {
            console.error('Erro ao alterar a senha:', error);
            if (error.code === 'auth/wrong-password') {
                Alert.alert('Erro', 'A senha atual está incorreta.');
            } else {
                Alert.alert('Erro', 'Ocorreu um erro ao alterar a senha. Tente novamente.');
            }
        }
    };
    // Fim da Implementação

    return (
        <View style={styles.container}>

            <View style={[styles.header, {flex:2}]}>
                <Ionicons name="person-sharp" size={60} color="#fff" />
                <Text style={styles.alterar}>Alterar foto</Text>
            </View>
    
            <View style={[styles.main, {flex:5}]}>
    
                <View style={styles.infoStatus}>
                    <Text style={styles.textVoce}>Você</Text>
                    <Text style={styles.textColabora}>{userName}</Text>
                </View>
    
                <View style={styles.infoCodigo}>
                    <Text style={styles.login}>Login</Text>
                    <Text style={styles.codigo}>{userCode}</Text>  
                </View>
    
                <View style={styles.alteraSenha}>
                    <View style={styles.inputArea}>
                    <TextInput
                        style={styles.input}
                        value={senhaAtual}
                        onChangeText={setSenhaAtual}
                        placeholder='Senha Atual'
                        placeholderTextColor='#bbb'
                        secureTextEntry={hideCurretPass}
                        maxLength={10}
                        />
                        <Pressable style={styles.icon} onPress={() => setHideCurretPass(!hideCurretPass)}>
                            {hideCurretPass ? 
                            <Ionicons name='lock-closed-outline' color='#fff' size={25} />
                            :
                            <Ionicons name='lock-open-outline' color='#fff' size={25} />
                            }
                        </Pressable>
                    </View>
    
                <View style={styles.inputArea}>
                    <TextInput
                        style={styles.input}
                        value={novaSenha}
                        onChangeText={setNovaSenha}
                        placeholder='Nova Senha'
                        placeholderTextColor='#bbb'
                        secureTextEntry={hideNewPass}
                        maxLength={10}
                        />
                        <Pressable style={styles.icon} onPress={() => setHideNewPass(!hideNewPass)}>
                            {hideNewPass ? 
                            <Ionicons name='lock-closed-outline' color='#fff' size={25} />
                            :
                            <Ionicons name='lock-open-outline' color='#fff' size={25} />
                            }
                        </Pressable>
                </View>
                </View>
        
                <View style={styles.cont_redefinir}>
                    <Pressable style={styles.bntRedefinir} onPress={handleChangePassword}>
                    <Link href='/telaMenu'>
                        <Text style={styles.redefinirSenha}>Alterar Senha</Text>
                    </Link>
                    </Pressable>
                </View>
            </View>
        
            <View style={[styles.footer, {flex:0.5}]}>
                <Link href='#'>
                    <Ionicons name="chevron-back-outline" size={24} color="#fff"/>
                </Link>
        
                <Pressable onPress={handleSair}>
                <Text style={styles.desconectar}>Desconectar</Text>
                </Pressable>
            </View>
        </View>
        );
    }

// Teste de implementação do LogOut
const Cliques = () => {
    const [getCliques, setCliques] = useState(0);
    const user = auth.currentUser;
    const router = useRouter();

}

export default TelaPerfilUsuario;
