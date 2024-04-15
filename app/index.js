import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground } from 'react-native';
import { Link } from 'expo-router';


function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../assets/background.png')} style={styles.imageBackground}>
        
      <View style={styles.logo}>
        <Image source={require('./../assets/logo.png')}
        style={styles.marca}
        />
        
        <Text style={styles.textoLogo}>Consultants Orders</Text>
      </View>

      <View style={styles.content}>
        <TextInput //Input email
        style={styles.input}
        placeholder='Email'
        />

        <TextInput //Input senha
        style={styles.input}
        placeholder='Senha'
        />

        <Text style={styles.entrar}>
        Entrar
        </Text>

      </View>

      <View style={styles.base}>
        <Text style={styles.texto}>Recupera Senha</Text>
            
      <Link href="/telaCadastro">
        <Text style={styles.texto}>Cadastrar</Text>
      </Link>  

      </View>

      
      {/* <StatusBar style="auto" /> */}

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 1,
    
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  },

  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#fff',
    marginTop: 10,
    padding: 8,
    position: 'absolute',
    top: 10
  },
  
  textoLogo: {
    fontSize: 20
  },

  content: {
    // borderWidth: 1,
    // flex: -1,
    flexDirection: 'column',
    justifyContent:'space-around',
    alignItems: 'center',
    // columnGap: 50,
    gap: 20,
    padding: 10,
    position: 'absolute',
    

  },

  input:{
    // borderWidth: 3,
    // borderColor: 'gray',

    // textAlign: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#D9D9D9',
    color: 'gray',
    width: 295,
    
  },

  entrar: {
    borderWidth: 3,
    borderColor: '#D9D9D',
    textAlign: 'center',
    padding: 10,
    borderRadius: 8,
    // backgroundColor: 'gray',
    color: 'gray',
    width: 263
  },

base:{
  // borderWidth: 1,
  // borderColor: '#fff',
  flex: -1,
  backgroundColor:'gray',
  flexDirection: 'row',
  justifyContent:'space-between',
  padding: 10,

  position: 'absolute',
  bottom: -1,

  width: 360
},

texto: {
  color:'white'
}

});

export default App;