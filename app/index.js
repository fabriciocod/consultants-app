import React, { useState } from 'react'; 
import { Ionicons } from '@expo/vector-icons';
import { Text, View, Image, ImageBackground, TextInput, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { auth } from '../firebaseConfig'
import { signInWithEmailAndPassword} from "firebase/auth";
import styles from './styles/styles_Index';

function App() {
  const [email, setEmail] = useState(""); //recebe texto do input email
  const [senha, setSenha] = useState(""); // recebe texto do input senha
  const [ hidePass, setHidePass] = useState(true); // mantei estado true fixo
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Teste de login de usuário cadastrado diretamento no firebase
  const handleLogin = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, senha);
      setLoading(false);
      router.replace('/telaMenu');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode);
      console.error(errorMessage);
      setLoading(false);
    }    
  }

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={require('./../assets/background.png')} style={styles.imageBackground}> */}

    <View style={styles.cont0}></View>

      <View style={styles.header}>
        <Image source={require('./../assets/logo.png')}
        style={styles.marca}
        />
        
      </View>

    {/* espaço vazio */}
    <View style={styles.cont1}></View>
      
      <View style={styles.main}>
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
            { hidePass ? //Formatação condicional para estado do icones
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
        {/* o parametro onPress com a função fazerLogin redireciona para tela menu digitar o usuáro e a senha */}
        <Pressable style={styles.bntEntrar}>
          <Link href='/telaMenu'>
            <Text style={styles.entrar}>Entrar</Text>
          </Link>
        </Pressable>

        <Pressable onPress={() => {handleLogin(email, senha, router);}} loading={loading} style={styles.bntEntrar}>
          {/* <Link href='/telaMenu'> */}
            <Text style={styles.entrar}>Login</Text>
          {/* </Link> */}
        </Pressable>

      </View>

    {/* espaço vazio */}
    <View style={styles.cont3}></View>

      <View style={styles.footer}>
      
        <Link href='/recuperaSenha'>
          <Text style={styles.texto}>Recupera Senha</Text>
        </Link>
        
            
        <Link href="/telaCadastro">
          <Text style={styles.texto}>Cadastrar</Text>
        </Link>  

      </View>

      {/* </ImageBackground> */}
    </View>

    
  );
}

export default App;