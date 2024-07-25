import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View} from 'react-native';
import { Link } from 'expo-router';

const telaMenu = () => {
  return (
    <View style={styles.container}>
      {/* Inicio do Header */}
      <View style={styles.header}>

        <View style={styles.perfil}>
          <View style={styles.avatar}>
            <Link href='/telaPerfilUsuario'>
              <Ionicons name="person-sharp" size={50} color="#fff" />
            </Link>
          </View>
          
          <View style={styles.info_perfil}>
            <Text style={styles.usuario}>Usuário Ativo</Text>
            <Text style={styles.usarioFuncao}>Função do Usuário</Text>
          </View>
          

      </View>

      <View style={styles.icones}>
        {/* Icones do header lado direito */}
          <Ionicons name="qr-code-outline" size={24} color="#fff"/>
          <Ionicons name="sync-outline" size={24} color="#fff"/>
          <Ionicons name="notifications" size={24} color="#fff"/>
      </View>

      </View>
      {/* Fim do Header */}

      {/* espaço vazio*/}
      <View style={styles.cont1}></View>


      <View style={styles.main}>
      {/* Inicio navegação do app */}

        <View style={styles.menu}>
          <Link href='#'>
          < Ionicons name="cube" size={24} color="#579DD9" style={styles.icon_topico}/>
          <Text style={styles.topico}>Receber</Text>
          </Link>
        </View>

        <View style={styles.menu}>
          <Link href='#'>
          < Ionicons name="person-sharp" size={24} color="#579DD9" style={styles.icon_topico}/>
          <Text style={styles.topico}>Contatos</Text>
          </Link>
        </View>

        <View style={styles.menu}>
          <Link href='#'>
          < Ionicons name="reader" size={24} color="#579DD9" style={styles.icon_topico}/>
          <Text style={styles.topico}>Relatório</Text>
          </Link>
        </View>
        
      {/* Fim navegação do app */}
      </View>
      
      {/* espaço vazio*/}
      <View style={styles.cont2}></View>

      <View style={styles.footer}>
      
        <Link href='#'>
          <Text style={styles.suporte}>Suporte</Text>
        </Link>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    
  },

  cont1: {
    flex: 1,
  },

  cont2:{
    flex: 1,
  },

  header: {
    flex: 2.7,
    backgroundColor: '#044d8c',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  
  perfil: {
    flexDirection: 'row',
    justifyContent: 'center',
    widht: 50,
    alignItems: 'center',
    gap: 10,
    paddingLeft: 16
    
  },

  usuario: {
    fontSize: 19,
    color: '#fff'
  },

  usarioFuncao: {
    fontSize: 12,
    color: '#848282'
  },

  

  icones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#044D8C',
    marginLeft: 10,
    gap: 5

  },

  main: {
    flex: 10,
  },

  menu: {
    borderColor: '#808080',
    borderBottomWidth: 2,
    marginLeft: 16,
    marginRight: 16,
    padding: 5,
  
  },

  topico:{
    fontSize: 14,
    color: '#808080',
    
  },


  footer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#044D8C',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 1,
    paddingBottom: 1,  
  },

  suporte: {
    color:'#fff',
    fontSize: 15,
  }
 
});

export default telaMenu;