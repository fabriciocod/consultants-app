import {StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router'

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

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent:'space-around',
        backgroundColor:'#fff'
    },

    cont1: {
        flex:4,
        // backgroundColor:'#fff'
    },

    cont2: {
        flex:1,
        // backgroundColor:'#fff'
    },

    cont3:{
        flex:4,
        // backgroundColor:'#fff'
    },

    header: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
        padding: 20,
        alignItems: 'center'
    },

    main: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'space-aroundc',
        alignItems: 'center',
        gap: 20,
        // padding: 20
    },

    titulo: {
        fontSize: 20,
        marginHorizontal: 10
    },

    informe:{
        fontSize: 14,
        // paddingLeft: 20
    },

    // Inicio do estilo do inputs
    inputArea:{
        flexDirection: 'row',
        width: '90%',
        borderRadius: 5,
        borderColor: '#000',
        borderBottomWidth: 1,
        height: 50,
        alignItems: 'center'
    },

    input:{
        width: '85%',
        height: 50,
        color: '#000',
        padding: 8,
        fontSize: 14,
        alignItems: 'center'
    },

    icon:{
        width: '15%',
    
    },
// Fim do estilo input
    
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center' 
    },

    bntconfirmar: {
        backgroundColor:'#044D8C',
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center',
        width: 140,
        height: 50
    },
    
    confirmar: {
        color:'#fff'
    },

    bntCancelar: {
        backgroundColor:'#6D0909',
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center',
        width: 140,
        height: 50
    },
    
    cancelar: {
        color:'#fff'
    },
});

export default recuperaSenha