import React, { useState } from 'react'; 
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { firebaseApp } from '../firebaseConfig';
import { createUserWithEmailAndPassword, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

function Cadastro() {
  const [nome, setNome] = useState(""); // recebe texto do input nome
  const [email, setEmail] = useState(""); // recebe texto do input email
  const [senha, setSenha] = useState(""); // recebe texto do input senha
  const [confirmarSenha, setConfirmarSenha] = useState(""); // recebe texto do input confirmar senha
  const [hidePass, setHidePass] = useState(true); // mantém estado true fixo
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.cont0}></View> */}

      <View style={styles.header}>
        <Image source={require('./../assets/logo.png')}
        style={styles.marca}
        />
      </View>

      {/* espaço vazio
      <View style={styles.cont1}></View> */}

      {/* <View style={styles.main}> */}
        <View style={styles.inputArea}>
          <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder='Nome'
          placeholderTextColor='#000'
          />

          <Ionicons style={styles.icon} name='person-outline' color='#000' size={25} />
        </View>

        <View style={styles.inputArea}>
          <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder='Email'
          placeholderTextColor='#000'
          />

          <Ionicons style={styles.icon} name='mail-outline' color='#000' size={25} />
        </View>

        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={senha}
            placeholder='Senha'
            placeholderTextColor='#000'
            onChangeText={(senha) => setSenha(senha)}
            secureTextEntry={hidePass}
          />
          <Pressable style={styles.icon} onPress={() => setHidePass(!hidePass)}>
            { hidePass ? 
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
            onChangeText={(confirmarSenha) => setConfirmarSenha(confirmarSenha)}
            secureTextEntry={hidePass}
          />
          <Pressable style={styles.icon} onPress={() => setHidePass(!hidePass)}>
            { hidePass ? 
            <Ionicons name='lock-closed-outline' color='#000' size={25}/>
            :
            <Ionicons name='lock-open-outline' color='#000' size={25}/>
            }
          </Pressable>
        </View>
      {/* </View> */}

      {/* espaço vazio
      <View style={styles.cont2}></View> */}

      <View style={styles.button}>
        <Pressable  onPress={() => {fazerCadastro(email, senha, confirmarSenha, router);}} style={styles.bntEntrar}>
          <Text style={styles.entrar}>Cadastrar</Text>
        </Pressable>
      </View>

      {/* espaço vazio
      <View style={styles.cont3}></View> */}

      <View style={styles.footer}>
        <Link href='/'>
          <Text style={styles.texto}>Já tem uma conta? Faça login</Text>
        </Link>  
      </View>
    </ScrollView>
  );
}

const fazerCadastro = (email, senha, confirmarSenha, router) => {
  if (senha !== confirmarSenha) {
    console.log('As senhas não coincidem.');
    return;
  }

  const auth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Usuário cadastrado com sucesso!');
      console.log(user.uid);
      console.log(user);
      router.replace('/telaMenu');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-around',
  },

  // cont0:{
  //   flex: 1
  // },

  // cont1:{
  //   flex:2
  // },

  // cont2:{
  //   flex:2
  // },

  // cont3:{
  //   flex:4
  // },

  header: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center'   
  },
  
  main: {
    // flex: 4,
    flexDirection: 'column',
    justifyContent:'space-around',
    gap: 50,
    alignItems: 'center'       
  },

  inputArea:{
    // flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    borderRadius: 5,
    borderColor: '#000',
    borderBottomWidth: 1,
    height: 50,
    alignItems: 'center',
    // paddingVertical: 40
    // columnGap: 100    
  },

  input:{
    width: '85%',
    height: 50,
    color: '#000',
    padding: 8,
    fontSize: 14
  },

  icon:{
    width: '20%',
  },

  button: {
    // flex: 1,
    flexDirection: 'colunm',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20   
  },

  bntEntrar: {
    backgroundColor:'#044D8C',
    borderRadius: 8,
    justifyContent:'center',
    alignItems:'center',
    width: 300,
    height: 50
  },

  entrar: {
    fontSize: 17,
    color:'#fff',
  },

  footer:{
    // flex:1,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'baseline',
    backgroundColor: '#044D8C',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    
  },

  texto: {
    color:'white',
    fontSize: 15
  }
});

export default Cadastro;
