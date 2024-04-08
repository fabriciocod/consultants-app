import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <Image source={require('./../assets/logo-top.png')}
        style={styles.marca}
        />
        
      </View>

      <View style={styles.content}>
        <Text>
        Open up App.js to start working on your app!
        </Text>
      </View>

      <View style={styles.base}>
      <Text style={styles.recupera}>Recupera Senha</Text>
      <Text style={styles.cadastrar}>Cadastrar</Text>
      </View>

      
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 1,
  },

  content: {
    borderWidth: 1,
    borderColor: '#fff'
  },

  marca: {
    marginTop: 20
  },

  base: {
    fles: 1,
    flexDirection: 'row',
    gap: 160,
    backgroundColor:'#8c8c8c'
  },


});
