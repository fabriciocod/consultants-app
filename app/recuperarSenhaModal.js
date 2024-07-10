import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Link, router } from 'expo-router';

const recuperaSenhaModal = () => {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <View style={styles.container}>

        <View style={styles.header}>
            <Text style={styles.titulo}>Recuperar Senha</Text>

            <Text style={styles.informe}>
            Por favor, confirme seu email para 
            receber um código de verificação.
            </Text>
        </View>

        <View style={styles}>
            <TextInput style={styles.input}
            placeholder='Email'
            />
        </View>

    <View style={styles.button}>

            <TouchableOpacity style={styles.bntConfirmar}>
                <Link href>
                <Text style={styles.confirmar}>Confirmar</Text>
                </Link>
             </TouchableOpacity>

            <TouchableOpacity style={styles.bntCancelar}>
                <Link href='/'>
                <Text style={styles.cancelar}>Cancelar</Text>
                </Link>
            </TouchableOpacity>

        </View>
      
             
      
      
      
      {/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#fff'
 },

  header:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center'
 },

  main: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: 20,
    padding: 20
  },

  titulo:{
    fontSize: 16,
    paddingLeft:20
  },
  
  informe:{
    fontSize: 16,
    paddingLeft: 20
  },

  input:{
    //flex: -2,
    //flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 20,
    height: 20
  },

  
});

export default recuperaSenhaModal