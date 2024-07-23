import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const telaMenu = () => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={require('./../assets/background.png')} style={styles.imageBackground}>  */}
      {/* Inicio do Header */}
      <View style={styles.header}>

        <View style={styles.perfil}>
          <Link href="#">
            <Ionicons name="person-sharp" size={24} color="#fff" />
          </Link>

          <Text style={styles.usuario}>Usuário Ativo</Text>

          <Text style={styles.usarioFuncao}>Função do Usuário</Text>

      </View>

      <View style={styles.icones}>
        {/* Icones do header lado direito */}
          <Ionicons name="qr-code-outline" size={24} color="#fff"/>
          <Ionicons name="refresh-outline" size={24} color="#fff"/>
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
          < Ionicons name="person-sharp" size={24} color="#000" style={styles.icon_topico}/>
          <Text style={styles.topico}>Receber</Text>
          </Link>
        </View>

        <View style={styles.menu}>
          <Link href='#'>
          < Ionicons name="person-sharp" size={24} color="#000" style={styles.icon_topico}/>
          <Text style={styles.topico}>Receber</Text>
          </Link>
        </View>

        <View style={styles.menu}>
          <Link href='#'>
          < Ionicons name="person-sharp" size={24} color="#000" style={styles.icon_topico}/>
          <Text style={styles.topico}>Receber</Text>
          </Link>
        </View>
        
      {/* Fim navegação do app */}
      </View>
      
      {/* espaço vazio*/}
      <View style={styles.cont2}></View>



      <View style={styles.footer}>
      
        <Link href='/'>
          <Ionicons name="person-sharp" size={24} color="#fff" />
        </Link>
        
        <Text style={styles.texto}>Suporte</Text>

      </View>
      {/* </ImageBackground> */}





    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  // imageBackground: {
  //   flex: 1,
  //   resizeMode: 'cover',
  //   justifyContent: 'center',
  //   width: '100%'

  // },

  cont1: {
    flex: 1,
  },

  cont2:{
    flex: 1,
  },

  header: {
    flex: 2.7,
    backgroundColor: "#044d8c",
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  usuario: {
    fontSize: 19,
    color: '#fff'
  },

  usarioFuncao: {
    fontSize: 12,
    color: '#848282'
  },

  perfil: {
    flexDirection: 'column',
    justifyContent: 'center',
    // borderStyle: '1'
    
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
    fontSize: 18,
    color: '#808080',
    
  },


  footer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#044D8C',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 1,
    paddingBottom: 1
  
  },
  texto: {
    color:'#fff',
    fontSize: 15
  }

 
});

export default telaMenu;