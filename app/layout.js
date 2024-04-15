

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const layout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}> 
        <Text> Logo - Header</Text>
      </View>
    
    {/* espaço vazio */}
      <View style={styles.cont1}></View>

      <View style={styles.main}> 
        <Text> Input - Main</Text>
      </View>
    
    {/* espaço vazio */}
      <View style={styles.cont2}></View>

      <View style={styles.button}> 
        <Text> Button - cadastrar</Text>
      </View>

    {/* espaço vazio */}
      <View style={styles.cont3}></View>

      
      <View style={styles.footer}> 
        <Text>Recupera Senha</Text>
        <Text>Cadastrar</Text>
      </View>
    </View>
  )
}

export default layout

const styles = StyleSheet.create({

    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: 'gray'
    },

    logo: {
        flex: 1,
        backgroundColor: 'blue'
    },

    cont1:{
        flex:3, 
    },
    main: {
        flex:3,
        backgroundColor: 'red'
    },

    cont2:{
        flex:1, 
    },

    button: {
        flex: 2,
        backgroundColor: 'yellow'
    },

    cont3:{
        flex:6, 
    },

    footer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'gray',
        paddingLeft: 10,
        paddingRight: 10
    }
})