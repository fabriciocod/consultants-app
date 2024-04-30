import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { Link } from 'expo-router'

const alterarSenha = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('./../assets/background.png')} style={styles.imageBackground}>
        
        <View style={styles.header}>
            <Image source={require('./../assets/logo.png')}
            styles={styles.marca}
            />

            <Text style={styles.textoLogo}>Consultants Orders</Text>
        </View>

        {/* espaço vazio */}
        <View style={styles.cont1}></View>

        <View style={styles.main}>
          <Text style={styles.titulo}>Alerar Senha</Text>

          <Text style={styles.informe}>
            Por favor, informe o código recebido
            para recuperação da senha.
          </Text>

          <TextInput
          style={styles.input}
          placeholder='Código'
          />

          <TextInput
          style={styles.input}
          placeholder='Nova Senha'
          />

          <TextInput
          style={styles.input}
          placeholder='Confirme a Senha'
          />

        </View>

        {/* espaço vazio */}
        <View style={styles.cont2}></View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.bntconfirmar}>
            <Link href="#">
              <Text style={styles.confirmar}>Confirmar</Text>
            </Link>
          </TouchableOpacity>
        </View>
     
      </ImageBackground>
    </View>
  )
}

export default alterarSenha

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        backgroundColor: '#B0C9D9'
    },

    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%'
    },

    cont1: {
      flex:0.1
    },

    cont2:{
      flex:1
    },

    cont3:{
      flex:3
    },

    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center'   
      },

    textoLogo:{
      fontSize: 20,
      color: '#044D8C'
    },

    main: {
      flex: 4,
      flexDirection:'column',
      justifyContent:'space-around',
      gap: 20,
      padding:20
    },

    titulo:{
      fontSize:16,
      paddingLeft:20
    },

    informe:{
      fontSize:16,
      padding: 20
    },

    input:{
      borderRadius:8,
      backgroundColor:'#fff',
      justifyContent:'space-around',
      padding:20,
      height:20
    }
})