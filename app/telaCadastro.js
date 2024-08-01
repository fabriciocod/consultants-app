import { Ionicons } from '@expo/vector-icons';
import React, { useState} from 'react'
import { View, Text, StyleSheet, Pressable, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles/styles_Cadastro';
import { Link } from 'expo-router';




const telaCadastro = () => {
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

export default telaCadastro;
