import {ImageBackground, StyleSheet, Text, View, image, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { Link } from 'expo-router'

const alterarSenha = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('./../assets/background.png')} style={styles.imageBackground}>
        
        {/* <View style={styles.header}>
            <Image source={require('./../assets/logo.png')}
            styles={styles.marca}
            />

            <Text style={styles.textoLogo}></Text>
        </View> */}

        {/* espaço vazio */}
        <View style={styles.cont1}></View>

        <View style={styles.main}>
          <Text style={styles.titulo}>Alterar Senha</Text>

          <Text style={styles.informe}>
            Por favor, informe o código recebido
            para recuperação da senha.
          </Text>

        <View style={styles.codigo}>
          <TextInput
          style={styles.input}
          placeholder='Código'
          />
        </View>

        <View style={styles.senhas}>
          <TextInput
          style={styles.input}
          placeholder='Nova Senha'
          />

          <TextInput
          style={styles.input}
          placeholder='Confirme a Senha'
          />
        </View>

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

         {/* espaço vazio */}
         <View style={styles.cont3}></View>

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
        // backgroundColor: '#B0C9D9'
    },

    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%'
    },

    cont1: {
      flex:2
    },

    cont2:{
      flex:1
    },

    cont3:{
      flex:2
    },

    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center'   
      },

    // textoLogo:{
    //   fontSize: 20,
    //   color: '#044D8C'
    // },

    main: {
      flex: 4,
      flexDirection:'column',
      justifyContent:'space-around',
      gap: 20,
      padding:20
    },

    titulo:{
      fontSize:20,
      paddingLeft:20
    },

    informe:{
      fontSize:15,
      padding: 20
    },

    codigo:{
      flex: 1,
      flexDirection: 'row' ,
      justifyContent: 'left',


    },

    senhas:{
      flex: 1,
      flexDirection: 'row' ,
      justifyContent:'space-around',
      // padding: 20,
      height:20

    },

    input:{
      borderRadius:8,
      backgroundColor:'#D9D9D9',
      justifyContent:'space-around',
      padding:20,
      height:20
    },

    button:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },

    bntconfirmar:{
        backgroundColor:'#044D8C',
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center',
        width: 188,
        height: 50
    },
    
    confirmar:{
        color: '#fff'
    }

})