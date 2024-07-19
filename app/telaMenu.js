import * as React from 'react';
import { Icon } from 'react-native-paper'; 
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const telaMenu = () => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={require('./../assets/background.png')} style={styles.imageBackground}>  */}
      
      <View style={styles.header}>

        <View style={styles.perfil}>
          <Link href="#">

          <Icon
              source="account"
              color='#fff'
              size={55}
            />

          </Link>
          <Text style={styles.usuario}>Usuário Ativo</Text>

          <Text style={styles.usarioFuncao}>Função do Usuário</Text>

      </View>

      <View style={styles.icones}>
          <Icon
          source="qrcode"
          color='#fff'
          size={30}
          />

          <Icon
          source="refresh"
          color='#fff'
          size={30}
          />

          <Icon
          source="bell"
          color='#fff'
          size={30}
          />

      </View>

      </View>

      {/* espaço vazio*/}
      <View style={styles.cont1}></View>


      <View style={styles.main}>

      <Link href='#'>
        <Icon
          source="package-variant-closed"
          color='#579dd9'
          size={25}
        />

      <Text style={styles.menu}>Receber</Text>
      </Link>

      <Link href='#'>
        <Icon
          source="account"
          color= "#579dd9"
          size={25}
        />
        
      <Text style={styles.menu}>Contatos</Text>
      </Link>

      <Link href='#'>
        <Icon
          source="note-edit-outline"
          color= "#579dd9"
          size={25}
        />
        
      <Text style={styles.menu}>Relatório</Text>
      </Link>

      </View>
      
      {/* espaço vazio*/}
      <View style={styles.cont2}></View>



      <View style={styles.footer}>
       
        <Link href='/'>
          <Icon
            source="arrow-left"
            color='#fff'
            size={25}
          />
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
    justifyContent: 'center'
    
  },

  icones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#044D8C',
    marginLeft: 10,

  },

  main: {
    flex: 10,
  },

  menu: {
    fontSize: 16,
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