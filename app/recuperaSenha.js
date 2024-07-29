import {Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router'
import styles from './styles/styles_Recuperar';

const recuperaSenha = () => {
    const [recuperaEmail, setRecuperaEmail] = useState("");
    
    return (
        <View style={styles.container}>
                
        {/* espaço vazio */}
        <View style={styles.cont1}></View>

            <View style={styles.main}>
                <Text style={styles.titulo}>Recuperar Senha</Text>

                <Text style={styles.informe}>
                    Por favor, confirme seu e-mail para
                    receber um código de verificação
                </Text>
                {/* Ajuste do campo de email para recuperar senha */}
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
            </View>

         {/* espaço vazio */}
        <View style={styles.cont2}></View>

            <View style={styles.button}>

                <Pressable style={styles.bntconfirmar}>
                <Link href="./alterarSenha">  
                <Text style={styles.confirmar}>Confirmar</Text>
                </Link>  
                </Pressable>

                <Pressable style={styles.bntCancelar}>
                <Link href='/'>
                <Text style={styles.cancelar}>Cancelar</Text>
                </Link>
                </Pressable>
            
            </View>

        {/* espaço vazio */}
        <View style={styles.cont3}></View>

    </View>
    );
}

export default recuperaSenha