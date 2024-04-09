import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <Image source={require('./../assets/logo-top.png')}
        style={styles.marca}
        />
        
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
      <Text style={styles.texto}>Cadastrar</Text>
      </View>

      
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 1,
  },

  logo: {
    alignItems: 'center',
    // borderWidth: 1,
    // marginTop: 10,
    padding: 8
  },
  
  content: {
    // borderWidth: 1,
    // flex: -1,
    flexDirection: 'column',
    justifyContent:'space-around',
    alignItems: 'center',
    // columnGap: 50,
    gap: 20,
    padding: 10

  },

  input:{
    borderWidth: 3,
    borderColor: 'gray',
    // textAlign: 'center',
    padding: 10,
    borderRadius: 8,
    // backgroundColor: 'gray',
    color: 'gray',
    width: 295,
  },

  entrar: {
    borderWidth: 3,
    borderColor: 'gray',
    textAlign: 'center',
    padding: 10,
    borderRadius: 8,
    // backgroundColor: 'gray',
    color: 'gray',
    width: 263
  },

base:{
  // borderWidth: 1,
  // flex: -4,
  backgroundColor:'gray',
  flexDirection: 'row',
  justifyContent:'space-between',
  padding: 10

  // width: 400
},

texto: {
  color:'white'
}

});
