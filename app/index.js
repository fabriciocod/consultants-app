import * as React from 'react'; 
import { TextInput } from 'react-native-paper';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';



function App() {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../assets/background.png')} style={styles.imageBackground}>

    <View style={styles.cont0}></View>

      <View style={styles.header}>
        <Image source={require('./../assets/logo.png')}
        style={styles.marca}
        />
        
      </View>

    {/* espaço vazio */}
    <View style={styles.cont1}></View>

      <View style={styles.main}>
      {/* Ajuste de input do app em teste */}
        <TextInput
        mode='flat'
        style={styles.input}
        label='Email'
        value={text}
        textColor='#fff'
        right={<TextInput.Icon icon="email-outline" color="#000"/>}
        
        
        onChangeText={text => setText(Text)}
        />

        {/* <TextInput //Input email
        style={styles.input}
        placeholder='Email'
        /> */}

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
    // backgroundColor: '#B0C9D9'         
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
  
  textoLogo: {
    fontSize: 20,
    color: '#044D8C'
  },

  main: {
    // borderWidth: 1,
    flex: 4,
    flexDirection: 'column',
    justifyContent:'space-around',
    gap: 50,
    padding: 10
        
  },

  input:{
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    fontSize:14,
    backgroundColor: 'none',
    padding: 8,
    width: 320,
    borderBottomWidth:2,
    borderColor:'#d9d9d9'
        
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
    width: 350,
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