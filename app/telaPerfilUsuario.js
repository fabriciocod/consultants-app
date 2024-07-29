import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signOut} from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles/styles_Perfil';

const TelaPerfilUsuario = () => {
    const [senhaAtual, setSenhaAtual] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [hideCurretPass, setHideCurretPass] = useState(true);
    const [hideNewPass, setHideNewPass] = useState(true);
    const [avatar, setAvatar] = useState(null);
    const [userRole, setUserRole] = useState('Admin'); // Exemplo de função do usuário
    const [userCode, setUserCode] = useState('ABC123'); // Exemplo de código de usuário
    const router = useRouter();


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setAvatar(result.uri);
        }

    };

    const handleSair = async () => {
        try {
        await signOut(auth);
        router.replace('/');
        } catch (error) {
        console.error(error.code);
        console.error(error.message);
        }
    }


    return (
        <View style={styles.container}>
            {/* Inicio do Header */}
            <View style={styles.header}>
                <View style={styles.perfAvatar}>
                    <Pressable onPress={pickImage}>
                        {avatar ? (
                            <Image source={{ uri: avatar }} style={styles.avatarImage} />
                        ) : (
                        <Ionicons name="person-sharp" size={50} color="#fff" />
                        )}
                    </Pressable>
                    <Text style={styles.altera}>Alterar Foto</Text>
                </View>
            </View>
            {/* Fim do Header */}

            {/* espaço vazio*/}
            <View style={styles.cont1}></View>

            <View style={styles.main}>
                {/* Inicio navegação do app */}
                <View style={styles.infoStatus}>
                    <Text style={styles.textVoce}>Você</Text>
                    <Text style={styles.textColabora}>{userRole}</Text>
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
                            placeholder='Senha Atual'
                            placeholderTextColor='#bbb'
                            onChangeText={(senhaAtual) => setSenhaAtual(senhaAtual)}
                            secureTextEntry={hideCurretPass}
                        />
                        <Pressable style={styles.icon} onPress={() => setHideCurretPass(!hideCurretPass)}>
                            {hideCurretPass ? (
                                <Ionicons name='lock-closed-outline' color='#fff' size={25} />
                            ) : (
                                <Ionicons name='lock-open-outline' color='#fff' size={25} />
                            )}
                        </Pressable>
                    </View>

                    <View style={styles.inputArea}>
                        <TextInput
                            style={styles.input}
                            value={novaSenha}
                            placeholder='Nova Senha'
                            placeholderTextColor='#bbb'
                            onChangeText={(novaSenha) => setNovaSenha(novaSenha)}
                            secureTextEntry={hideNewPass}
                        />
                        <Pressable style={styles.icon} onPress={() => setHideNewPass(!hideNewPass)}>
                            {hideNewPass ? (
                                <Ionicons name='lock-closed-outline' color='#fff' size={25} />
                            ) : (
                                <Ionicons name='lock-open-outline' color='#fff' size={25} />
                            )}
                        </Pressable>
                    </View>
                </View>

                <View style={styles.cont_Altera}>
                    <Pressable style={styles.bntRedefinir}>
                        <Link href='/telaMenu'>
                            <Text style={styles.redefinirSenha}>Alterar Senha</Text>
                        </Link>
                    </Pressable>
                </View>
                {/* Fim navegação do app */}
            </View>

            {/* espaço vazio*/}
            <View style={styles.cont2}></View>

            <View style={styles.footer}>
                <Link href='/telaMenu'>
                    <Ionicons name="chevron-back-outline" size={24} color="#fff"/>
                </Link>
                <Pressable onPress={handleSair}>
                    <Text style={styles.desconectar}>Desconectar</Text>
               </Pressable>
            </View>
        </View>
    );
};

// Teste de implementação do LogOut
const Cliques = () => {
    const [getCliques, setCliques] = useState(0);
    const user = auth.currentUser;
    const router = useRouter();

}

export default TelaPerfilUsuario;
