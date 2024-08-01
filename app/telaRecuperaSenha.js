import {Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebaseConfig';
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router'
import styles from './styles/styles_Recuperar';

const telaRecuperaSenha = () => {
    // const [recuperaEmail, setRecuperaEmail] = useState("");

    // Implementação de recuperação de senha
    // const EsqueciSenha = () => {
        const [email, setEmail] = useState('');
        const [loading, setLoading] = useState(false);
        const router = useRouter();
    
        const handleEsqueciSenha = async () => {
            try {
                setLoading(true);
                await sendPasswordResetEmail(auth, email);
                setLoading(false)
                router.replace('/');
            } catch (error) {
                console.error(error.code);
                console.error(error.message);
            }
        }
    // Fim da recuperação de senha

    return (
        <View style={styles.container}>
            
            <View style={[styles.main, {flex:0.5}]}>
                <View style={styles.texto}>
                    <Text style={styles.titulo}>Recuperar Senha</Text>
    
                    <Text style={styles.paragrafo}>
                        Por favor, confirme seu e-mail para
                        receber um código de verificação
                    </Text>
                </View>
    
                <View style={styles.inputArea}>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Informe o email'
                        placeholderTextColor='#000'
                        />
    
                        <Ionicons style={styles.icon} name='mail-outline' color='#000' size={25} />
    
                </View>
    
                    <View style={styles.cont_Button}>
                    
                    <Pressable style={styles.bntconfirmar} onChangeText={setEmail} keyboardType='email-address' onPress={handleEsqueciSenha} loading={loading}>
                        {/* <Link href="./telaAlterarSenha">   */}
                        <Text style={styles.confirmar}>Confirmar</Text>
                        {/* </Link>   */}
                    </Pressable>
                    
                    <Pressable style={styles.bntCancelar}>
                        <Link href='/'>
                        <Text style={styles.cancelar}>Cancelar</Text>
                        </Link>
                    </Pressable>
                    
                    </View>
                </View>
            </View>
        );
    }

export default telaRecuperaSenha;