import { Ionicons } from '@expo/vector-icons';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'expo-router';
import React, { useState} from 'react'
import { View, Alert, Text, Pressable, Image, TextInput } from 'react-native';
import styles from './styles/styles_Cadastro';
import { Link } from 'expo-router';


const telaCadastro = () => {
    // const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmaSenha] = useState("");
    const [ hideSenha, setHideSenha] = useState(true);
    const [ hideConfirmarSenha, setHideConfirmarSenha] = useState(true);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // Implementação de logica de cadastro
    const validarSenha = (senha1, senha2) => {
        var validada = false;
        if(senha1 !== senha2){
            Alert.alert('Senhas divergentes', 'As duas senhas estão com conteúdos diferentes. Para realizar o cadastro, é preciso que elas sejam iguais.');
        } else if(senha1.length < 6) {
            Alert.alert('Senha fraca', 'A senha deve ter no mínimo 6 caracteres.');
        } else {
            validada = true;
        }
        return validada;
    }
    
    const handleCadastrar = async () => {
        try {
            const validada = validarSenha(senha, confirmarSenha);
            if(validada) {
                setLoading(true);
                await createUserWithEmailAndPassword(auth, email, senha);
                setLoading(false);
                Alert.alert('Cadastro realizado', 'Usuário cadastrado com sucesso!');
                router.replace('/');
            }
        } catch (error) {
            console.error(error.code);
            console.error(error.message);
            setLoading(false);
            Alert.alert('Erro de cadastro', 'Ocorreu um erro ao tentar cadastrar o usuário. Por favor, tente novamente.');
        }
    }
      // Fim da logica de cadastro

    return (
        <View style={styles.container}>

            <View style={[styles.header, {flex:2}]}>
                <View style={styles.logo}>
                <Image source={require('./../assets/logo.png')} />
                </View>
            </View>

            <View style={[styles.main, {flex:5}]}>

                <View style={styles.inputArea}>
                    <TextInput
                    style={styles.input}
                    value={email}
                    placeholder='Email'
                    placeholderTextColor='#000'
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    />

                    <Ionicons style={styles.icon} name='mail-outline' color='#000' size={25} />

                </View>

                <View style={styles.inputArea}>
                    <TextInput
                    style={styles.input}
                    value={senha}
                    placeholder='Senha'
                    placeholderTextColor='#000'
                    onChangeText={setSenha}
                    secureTextEntry={hideSenha}
                    maxLength={6}
                    keyboardType='number-pad'
                    />

                <Pressable style={styles.icon} onPress={() => setHideSenha(!hideSenha)}>
                    { hideSenha ? //Formatação condicional para estado do icones
                    <Ionicons name='lock-closed-outline' color='#000' size={25}/>
                    :
                    <Ionicons name='lock-open-outline' color='#000' size={25}/>
                    }
                    
                </Pressable>

                </View>

                <View style={styles.inputArea}>
                    <TextInput
                    style={styles.input}
                    value={confirmarSenha}
                    placeholder='Confirmar Senha'
                    placeholderTextColor='#000'
                    onChangeText={setConfirmaSenha}
                    secureTextEntry={hideConfirmarSenha}
                    maxLength={6}
                    keyboardType='number-pad'
                    />

                    <Pressable style={styles.icon} onPress={() => setHideConfirmarSenha(!hideConfirmarSenha)}>
                        { hideConfirmarSenha ? //Formatação condicional para estado do icones
                        <Ionicons name='lock-closed-outline' color='#000' size={25}/>
                        :
                        <Ionicons name='lock-open-outline' color='#000' size={25}/>
                        }
                        
                    </Pressable>

                </View>

                <View style={styles.button}>
                    <Pressable style={styles.bntCadastrar} onPress={handleCadastrar} loading={loading}>
                    <Text style={styles.cadastrar}>Cadastrar</Text>
                    </Pressable>
                </View>

            </View>
            
            <View style={[styles.footer, {flex:0.5}]}>

                <Link href='/'>
                <Ionicons name="chevron-back" size={25} color="#fff" />
                </Link>

            </View>

        </View>
    );
}

export default telaCadastro;
