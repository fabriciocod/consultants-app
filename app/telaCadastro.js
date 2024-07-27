import { Ionicons } from '@expo/vector-icons';
import React, { useState} from 'react'
import { View, Text, StyleSheet, Pressable, Image, TextInput, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';




const Telacadastro = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmaSenha] = useState("");
    const [ hideSenha, setHideSenha] = useState(true);
    const [ hideConfirmarSenha, setHideConfirmarSenha] = useState(true);
    return (
        <View style={styles.container}>

                {/* View vázia */}
                <View style={styles.cont0}></View>

            <View style={styles.header}>
                <View style={styles.logo}>
                <Image source={require('./../assets/logo.png')} />
                </View>
            </View>

                {/* espaço vazio */}
                <View style={styles.cont1}></View>

            <View style={styles.main}>

                <View style={styles.inputArea}>
                    <TextInput
                    style={styles.input}
                    value={nome}
                    placeholder='Nome'
                    placeholderTextColor='#000'
                    onChangeText={setNome}
                    />

                    <Ionicons style={styles.icon} name='document-outline' color='#000' size={25} />

                </View>

                <View style={styles.inputArea}>
                    <TextInput
                    style={styles.input}
                    value={email}
                    placeholder='Email'
                    placeholderTextColor='#000'
                    onChangeText={setEmail}
                    />

                    <Ionicons style={styles.icon} name='mail-outline' color='#000' size={25} />

                </View>

                <View style={styles.inputArea}>
                    <TextInput
                    style={styles.input}
                    value={senha}
                    placeholder='Senha'
                    placeholderTextColor='#000'
                    onChangeText={setSenha}
                    secureTextEntry={hideSenha}
                    />

                <Pressable style={styles.icon} onPress={() => setHideSenha(!hideSenha)}>
                    { hideSenha ? //Formatação condicional para estado do icones
                    <Ionicons name='lock-closed-outline' color='#000' size={25}/>
                    :
                    <Ionicons name='lock-open-outline' color='#000' size={25}/>
                    }
                    
                </Pressable>

                </View>

                <View style={styles.inputArea}>
                    <TextInput
                    style={styles.input}
                    value={confirmarSenha}
                    placeholder='Confirmar Senha'
                    placeholderTextColor='#000'
                    onChangeText={setConfirmaSenha}
                    secureTextEntry={hideConfirmarSenha}
                    />

                    <Pressable style={styles.icon} onPress={() => setHideConfirmarSenha(!hideConfirmarSenha)}>
                        { hideConfirmarSenha ? //Formatação condicional para estado do icones
                        <Ionicons name='lock-closed-outline' color='#000' size={25}/>
                        :
                        <Ionicons name='lock-open-outline' color='#000' size={25}/>
                        }
                        
                    </Pressable>

                </View>

            </View>

            {/* espaço vazio */}
            <View style={styles.cont2}></View>

            <View style={styles.button}>
            <TouchableOpacity style={styles.bntCadastrar}>
            <Text style={styles.cadastrar}>Cadastrar</Text>
            </TouchableOpacity>
            </View>

            {/* espaço vazio */}
            <View style={styles.cont3}></View>
            
            <View style={styles.footer}>

                <Link href='/'>
                <Ionicons name="chevron-back" size={25} color="#fff" />
                </Link>

            </View>

            {/* </ImageBackground> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
        
    },

    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%'
    },
    cont0:{
        flex:1,
    },
    cont1:{
        flex:2,
    },

    cont2:{
        flex:1, 
    },

    cont3:{
        flex:3, 
    },

    // Definir regras do logo
    header: {
        // borderWidth:1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap:10,
        padding: 8,
        
    },

    logo: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    // Define regras do main
    main: {
        flex: 7,
        flexDirection: 'column',
        justifyContent:'space-around',
        alignItems:'center'
        // gap: 25,
        // padding: 10
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
        fontSize: 14
    },

    icon:{
        width: '15%',
    
    },
// Fim do estilo input

    button: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    bntCadastrar: {
        
        backgroundColor:'#044D8C',
        borderRadius: 8,
        justifyContent:'center',
        alignItems:'center',
        width: 156,
        height: 50
    },

    cadastrar: {
        color:'#fff'
    },

    footer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#044D8C',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5
      
      }
   
});

export default Telacadastro;
