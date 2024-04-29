import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

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

    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center'   
      },
})