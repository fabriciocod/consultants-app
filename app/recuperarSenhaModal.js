import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Link, router } from 'expo-router';

const recuperaSenhaModal = () => {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <View style={styles.container}>

        <View style={styles.header}>
            <Text style={styles.titulo}>Recuperar Senha</Text>
            <Text style={styles.paragrafo}>Por favor, confirme seu email para receber um código de verificação </Text>
        </View>

        <View style={styles}>
            <TextInput style={styles.input}
            placeholder='Email'
            />
        </View>

    <View style={styles.button}> <View/>

            <TouchableOpacity style={styles.bntCancelar}>
                <Text style={styles.cancelar}>Confirmar</Text>
             </TouchableOpacity>

            <TouchableOpacity style={styles.bntconfirmar}>
                <Link href="./alterarSenha">
                <Text style={styles.confirmar}>Cancelar</Text>
                </Link>
            </TouchableOpacity>

        </View>
      
      
      
      
      
      
      
      
      
      
      {!isPresented && <Link href="../">Dismiss</Link>}
      {/* Native modals have dark backgrounds on iOS. Set the status bar to light content and add a fallback for other platforms with auto. */}
      
      
      
      {/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
    </View>
  );
}

const styles = StyleSheet.create({

});
export default recuperaSenhaModal