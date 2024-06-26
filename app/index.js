import { StatusBar } from 'expo-status-bar';
// import { Button } from 'react-native-paper';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';



function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../assets/background.png')} style={styles.imageBackground}>
        
      <View style={styles.header}>
        <Image source={require('./../assets/logo.png')}
        style={styles.marca}
        />
        
        <Text style={styles.textoLogo}>Consultants Orders</Text>
      </View>

    {/* espaço vazio */}
    <View style={styles.cont1}></View>

      <View style={styles.main}>
        <TextInput //Input email
        style={styles.input}
        placeholder='Email'
        />

        <TextInput //Input senha
        style={styles.input}
        placeholder='Senha'
        /> 

      </View>

    {/* espaço vazio */}
    <View style={styles.cont2}></View>

    <View style={styles.button}>
      <TouchableOpacity style={styles.bntEntrar}>
        <Text style={styles.entrar}>Entrar</Text>
      </TouchableOpacity>
     
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

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#B0C9D9'         
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%'
  },

  cont1:{
    flex:3 
  },

  cont2:{
    flex:1
   },


  cont3:{
    flex:6 
},
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center'   
  },
  
  textoLogo: {
    fontSize: 20,
    color: '#044D8C'
  },

  main: {
    // borderWidth: 1,
    flex: 3,
    flexDirection: 'column',
    justifyContent:'space-around',
    gap: 20,
    padding: 20
        
  },

  input:{
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 8
        
  },

  button: {
    flex: 1,
    flexDirection: 'colunm',
    justifyContent: 'center',
    alignItems: 'center',
        
  },

  bntEntrar: {
    backgroundColor:'#044D8C',
    borderRadius: 8,
    justifyContent:'center',
    alignItems:'center',
    width: 265,
    height: 50
  },

  entrar: {
    color:'#fff',
  },



footer:{
  flex:1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#044D8C',
  paddingLeft: 10,
  paddingRight: 10

},

texto: {
  color:'white'
}

});

export default App;