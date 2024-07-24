import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { Link } from 'expo-router';


const TelaPerfilUsuario = () => {
    const [senhaAtual, setSenhaAtual] = useState(''); // receber o input senha atual
    const [novaSenha, setNovaSenha] = useState(''); // rececebe o input nova senha
    const [ hideCurretPass, setHideCurretPass ] = useState(true);
    const [ hideNewPass, setHideNewPass ] = useState(true);
    return(
    <View style={styles.container}>
        {/* Inicio do Header */}
        <View style={styles.header}>
            <View style={styles.perfAvatar}>
            <View style={styles.avatar}>
                <Link href='/telaPerfilUsuario'>
                <Ionicons name="person-sharp" size={50} color="#fff" />
                </Link>
            </View>
            
            <View style={styles.info_perfil}>
                <Text style={styles.altera}>Altera Foto</Text>
            </View>

        </View>

        </View>
      {/* Fim do Header */}

    {/* espaço vazio*/}
    <View style={styles.cont1}></View>


        <View style={styles.main}>
        {/* Inicio navegação do app */}

            <View styles={styles.infoStatus}>
                <Text style={styles.infoTexto}>Você</Text>
                <Text stle={styles.infoFuncao}>Função</Text>
            </View>

            <View style={styles.infoCodigo}>
                <Text style={styles.codigo}>Codigo Alfabetico</Text>
            </View>

            <View style={styles.inputArea}>
                <View style={styles.input}> 
                <TextInput
                    value={senhaAtual}
                    placeholder='Senha Atual'
                    placeholderTextColor='#000'
                    onChangeText={(senhaAtual) => setSenhaAtual(senhaAtual)}
                    secureTextEntry={hideCurretPass}
                />

                <Pressable style={styles.icon} onPress={() => setHideCurretPass(!hideCurretPass)}>
                    { hideCurretPass ? //Formatação condicional para estado do icones
                    <Ionicons name='lock-closed-outline' color='#000' size={25}/>
                    :
                    <Ionicons name='lock-open-outline' color='#000' size={25}/>
                    }
                
                </Pressable>
                </View>
                
                <View style={styles.input}>
                <TextInput
                    
                    value={novaSenha}
                    placeholder='Nova Senha'
                    placeholderTextColor='#000'
                    onChangeText={(novaSenha) => setNovaSenha(novaSenha)}
                    secureTextEntry={hideNewPass}
                />

                <Pressable style={styles.icon} onPress={() => setHideNewPass(!hideNewPass)}>
                    { hideNewPass ? //Formatação condicional para estado do icones
                    <Ionicons name='lock-closed-outline' color='#000' size={25}/>
                    :
                    <Ionicons name='lock-open-outline' color='#000' size={25}/>
                    }
            
                </Pressable>
                </View>

            </View>

            {/* <View style={styles.inputArea}>
            
            </View> */}

            
            
            
        {/* Fim navegação do app */}
        </View>
      
    {/* espaço vazio*/}
    <View style={styles.cont2}></View>



        <View style={styles.footer}>
            <Link href='/telaMenu'>
                <Ionicons name="chevron-back-outline" size={24} color="#fff" />
            </Link>

            <Link href='#'>
                <Text style={styles.desconectar}>Desconcetar</Text>
            </Link>

        </View>
    </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#044d8c'
    },

    cont1: {
        flex: 1,
    },
    
    cont2:{
        flex: 1,
    },

    header: {
        flex: 2.7,
        backgroundColor: "#044d8c",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    perfAvatar: {
        flexDirection: 'column',
        justifyContent: 'center',
        widht: 50,
        alignItems: 'center',
        gap: 1,
        paddingLeft: 16
        
    },
    
    altera:{
        fontSize: 10,
        color: '#808080'
    },

    main: {
        flex: 10,
        // flexDirection: 'column',
        // justifyContent:'space-around'

    },

    // Inicio do estilo do inputs
inputArea:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#000',
    backgroundColor: '#fff',
    // borderBottomWidth: 1,
    width: '90%',
    height: 50,
    gap: 20,
    
    
  },

input:{
    width: '30%',
    height: 50,
    color: '#000',
    padding: 8,
    fontSize: 10,
        
  },

icon:{
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
// Fim do estilo input

    footer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: '#044D8C',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 1,
        paddingBottom: 1,  
    },
    
    desconectar: {
        color:'#fff',
        fontSize: 15,
    }
});

export default TelaPerfilUsuario;