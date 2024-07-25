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

            <View style={styles.infoStatus}>
                <Text style={styles.textVoce}>Você</Text>
                <Text style={styles.textColabora}>Função</Text>
            </View>

            <View style={styles.infoCodigo}>
                <Text style={styles.login}>Login</Text>
                <Text style={styles.codigo}>Codigo Alfabetico</Text>
            </View>

            <View style={styles.alteraSenha}>

                <View style={styles.inputArea}>
                
                    <TextInput
                        style={styles.input}
                        value={senhaAtual}
                        placeholder='Senha Atual'
                        placeholderTextColor='#fff'
                        onChangeText={(senhaAtual) => setSenhaAtual(senhaAtual)}
                        secureTextEntry={hideCurretPass}
                    />

                    <Pressable style={styles.icon} onPress={() => setHideCurretPass(!hideCurretPass)}>
                        { hideCurretPass ? //Formatação condicional para estado do icones
                        <Ionicons name='lock-closed-outline' color='#fff' size={25}/>
                        :
                        <Ionicons name='lock-open-outline' color='#fff' size={25}/>
                        }
                    </Pressable>
                </View>
            
                <View style={styles.inputArea}>
                <TextInput
                        style={styles.input}
                        value={novaSenha}
                        placeholder='Nova Senha'
                        placeholderTextColor='#fff'
                        onChangeText={(novaSenha) => setNovaSenha(novaSenha)}
                        secureTextEntry={hideNewPass}
                    />

                    <Pressable style={styles.icon} onPress={() => setHideNewPass(!hideNewPass)}>
                        { hideNewPass ? //Formatação condicional para estado do icones
                        <Ionicons name='lock-closed-outline' color='#fff' size={25}/>
                        :
                        <Ionicons name='lock-open-outline' color='#fff' size={25}/>
                        }
                
                    </Pressable>
                </View>

            </View>

            <View style={styles.cont_Altera}>
                <Pressable style={styles.bntRedefinir}>
                    <Link href='/telaMenu'>
                        <Text style={styles.redefinirSenha}>Altera Senha</Text>
                    </Link>
                </Pressable>
            </View>    
            
            
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
        backgroundColor: '#044d8c',
    },

    cont1: {
        flex: 1,
    },
    
    cont2:{
        flex: 1,
    },

    header: {
        flex: 2,
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
        paddingLeft: 16,
        
    },
    
    altera:{
        fontSize: 10,
        color: '#808080',
    },

    main: {
        flex: 10,
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'column',
        justifyContent:'space-around'

    },

    infoStatus:{
        flex: 1,
    },

    textVoce:{
        fontSize: 18,
        color: '#fff'
    },
    
    textColabora:{
        fontSize: 14,
        color: '#808080' 
    },

    infoCodigo:{
        flex: 1
    },

    login:{
        fontSize: 18,
        color:'#fff',
        paddingTop: 5
    },

    codigo:{
        fontSize: 12,
        color:'#fff',
        borderColor: '#fff',
        borderBottomWidth: 1,
        paddingTop: 5
    },

    // Inicio do estilo do inputs

    alteraSenha:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    inputArea:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#fff',
        borderBottomWidth: 1,
        width: 150,
        height: 50,
        gap: 20,
            
    },

    input:{
        width: 70,
        height: 50,
        padding: 8,
        fontSize: 9,
            
    },

    icon:{
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // Fim do estilo input

    // Inicio do bntAlterarSenha
    cont_Altera:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    bntRedefinir:{
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 5,
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    redefinirSenha:{
        fontSize: 12,
        color: '#fff'
    },
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