import React, { useState } from 'react'; 
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { auth } from '../firebaseConfig'
import { signInWithEmailAndPassword} from "firebase/auth";





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


// const fazerLogin = (email, senha, router) => {
//     // Chamada dos useState email e senha
//   signInWithEmailAndPassword(auth, email, senha)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       console.log('Login realizado com sucesso!');
//       console.log(user.uid);
//       console.log(user);
//       // ...
//       router.replace('/telaMenu')
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode);
//       console.log(errorMessage);
//     });
// }
// Fim do teste de usuário no firebase

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
            
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%'
  },

  cont0:{
    flex: 1
  },

  cont1:{
    flex:2
  },

  cont2:{
    flex:2
  },

  cont3:{
    flex:4
},
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center'   
  },
  
  main: {
    flex: 4,
    flexDirection: 'column',
    justifyContent:'space-around',
    gap: 50,
    alignItems: 'center'
            
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
     // height: 50,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
// Fim do estilo input

  button: {
    flex: 1,
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
  flex:1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#044D8C',
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 5,
  paddingBottom: 5

},

texto: {
  color:'white',
  fontSize: 15
}

});

export default App;