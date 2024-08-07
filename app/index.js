import React, { useState } from 'react'; 
import { Ionicons } from '@expo/vector-icons';
import { Text, View, Image, TextInput, Pressable } from 'react-native';
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
      
      <View style={[styles.header, {flex:2}]}>
        <Image source={require('./../assets/logo.png')}
        style={styles.marca}
        />
        
      </View>
      
      <View style={[styles.main, {flex:5}]}>
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
            maxLength={10}
          />
          <Pressable style={styles.icon} onPress={() => setHidePass(!hidePass)}>
            { hidePass ? //Formatação condicional para estado do icones
            <Ionicons name='lock-closed-outline' color='#000' size={25}/>
            :
            <Ionicons name='lock-open-outline' color='#000' size={25}/>
            }
          </Pressable>
        </View>
        
        <View style={styles.button}>
          {/* o parametro onPress com a função fazerLogin redireciona para tela menu digitar o usuáro e a senha */}
          <Pressable style={styles.bntEntrar}>
            <Link href='/telaMenu'>
              <Text style={styles.entrar}>Entrar</Text>
            </Link>
          </Pressable>

          <Pressable onPress={() => {handleLogin(email, senha, router);}} loading={loading} style={styles.bntEntrar}>
              <Text style={styles.entrar}>Login</Text>
          </Pressable>

        </View>
      </View>

      <View style={[styles.footer, {flex:0.7}]}>
      
        <Link href='/telaRecuperaSenha'>
          <Text style={styles.texto}>Recupera Senha</Text>
        </Link>
        
            
        <Link href="/telaCadastroUsuario">
          <Text style={styles.texto}>Cadastrar</Text>
        </Link>  

      </View>

      
    </View>

    
  );
}

export default App;