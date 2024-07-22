import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState} from 'react';
import { Link } from 'expo-router';

const alterarSenha = () => {
  const [text, setText] = useState("");
  return (
    
          <View style={styles.container}>
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
                    label='Código'
                    secureTextEntry
                    right={<TextInput.Icon icon="close"/>}
                    value={text}
                    onChangeText={text => setText(Text)}
                  />

              </View>

              <View style={styles.senhas}>

                  <TextInput
                    style={styles.input}
                    label='Nova Senha'
                    secureTextEntry
                    right={<TextInput.Icon icon="close"/>}
                    value={text}
                    onChangeText={text => setText(Text)}
                  />

                  <TextInput
                    style={styles.input}
                    label='Confirme a Senha'
                    secureTextEntry
                    right={<TextInput.Icon icon="close"/>}
                    value={text}
                    onChangeText={text => setText(Text)}
                  />
              </View>

            </View>

                {/* espaço vazio */}
              <View style={styles.cont2}></View>

                <View style={styles.button}>
                  <Pressable style={styles.bntconfirmar}>
                    <Link href="/">
                      <Text style={styles.confirmar}>Confirmar</Text>
                    </Link>
                  </Pressable>

                </View>

                {/* espaço vazio */}
              <View style={styles.cont3}></View>
            </View>
    
          );
        }

export default alterarSenha

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        // backgroundColor: '#fff'
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
    // height:20  fontSize: 20,
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
      padding: 20,
      marginTop: -15,
      
    },

    codigo:{
      flex: 1,
      flexDirection: 'row' ,
      justifyContent: 'left',
      marginLeft: 7,
      marginBottom: 20

    },

    senhas:{
      flex: 1,
      flexDirection: 'row' ,
      justifyContent:'space-around',
      alignItems: 'center',
      // padding: 20,
      height:20

    },

    input:{
      alignItems: 'left',
      fontSize: 14,
      
      // borderRadius:8,
      backgroundColor:'#fff',
       justifyContent:'space-around',
      // padding:20,
      // height:20
      width: 150
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