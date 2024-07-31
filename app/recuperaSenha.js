import {Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router'
import styles from './styles/styles_Recuperar';

const recuperaSenha = () => {
    const [recuperaEmail, setRecuperaEmail] = useState("");
    
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
                        value={recuperaEmail}
                        onChangeText={setRecuperaEmail}
                        placeholder='Informe o email'
                        placeholderTextColor='#000'
                        />
    
                        <Ionicons style={styles.icon} name='mail-outline' color='#000' size={25} />
    
                </View>
    
                    <View style={styles.cont_Button}>
                    
                    <Pressable style={styles.bntconfirmar}>
                        <Link href="./telaAlterarSenha">  
                        <Text style={styles.confirmar}>Confirmar</Text>
                        </Link>  
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

export default recuperaSenha