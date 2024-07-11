import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { Link } from 'expo-router'

const recuperaSenha = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('./../assets/background.png')}
        style={styles.ImageBackground}>
        
            {/* <View style={styles.header}>
                <Image source={require('./../assets/logo.png')}
                style={styles.marca}
                />

                <Text style={styles.textoLogo}></Text>
            </View> */}

        {/* espaço vazio */}
        <View style={styles.cont1}></View>

            <View style={styles.main}>
                <Text style={styles.titulo}>Recuperar Senha</Text>

                <Text style={styles.informe}>
                    Por favor, confirme seu e-mail para
                    receber um código de verificação
                </Text>

                <TextInput
                style={styles.input}
                placeholder='E-mail'
                />
            </View>

         {/* espaço vazio */}
        <View style={styles.cont2}></View>

            <View style={styles.button}>

                <TouchableOpacity style={styles.bntconfirmar}>
                <Link href="./alterarSenha">  
                <Text style={styles.confirmar}>Confirmar</Text>
                </Link>  
                </TouchableOpacity>

                <TouchableOpacity style={styles.bntCancelar}>
                <Link href='/'>
                <Text style={styles.cancelar}>Cancelar</Text>
                </Link>
                </TouchableOpacity>
            
            </View>

        {/* espaço vazio */}
        <View style={styles.cont3}></View>

      </ImageBackground>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent:'space-around',
        backgroundColor:'#B0C9D9'
    },

    ImageBackground: {
        flex:1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%'
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
        justifyContent: 'space-around',
        gap: 20,
        padding: 20
    },

    titulo: {
        fontSize: 25,
        paddingLeft: 20
    },

    informe:{
        fontSize: 17,
        paddingLeft: 20
    },

    input: {
        // flex: -2,
        // flexDirection: 'column',
        justifyContent: 'space-around',
        borderRadius:8,
        backgroundColor: '#D9D9D9',
        padding: 20,
        height: 20
    },
    
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
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

   
});

export default recuperaSenha