import * as React from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const telaReceberEncomenda = () => {
  return (
      <View style={styles.container}>
        {/* Inicio do Header */}
        <View style={styles.header}>
  
          <View style={styles.InfoTitulo}>
            <View>
              <Text style={styles.infoEncomenda}>Encomendas</Text>
              <Text style={styles.infoDia}>Hoje</Text>
            </View>
          </View>
  
          <View style={styles.icones}>
            {/* Icones do header lado direito */}
            <Ionicons name="search" size={24} color="#808080" />
            <Ionicons name="calendar" size={24} color="#808080" />
            <AntDesign name="filter" size={24} color="#808080" />
            <Ionicons name="refresh" size={24} color="#808080" />
          </View>
  
        </View>
        {/* Fim do Header */}
  
        <View style={styles.button}>
            <Pressable style={styles.bntReceber}>
              <Link href='/telaContatos'>
                <Text style={styles.textReceber}>+ Receber</Text>
              </Link>
            </Pressable>

            <Pressable style={styles.bntReceber}>
              <Link href='/form_Encomenda'>
                <Text style={styles.textReceber}>+ Encomenda</Text>
              </Link>
            </Pressable>
          </View>
  
        {/* espaço vazio*/}
        <View style={styles.cont1}></View>
  
        <View style={styles.main}>
          {/* Conteúdo principal, sem cards */}
        </View>
        
        {/* espaço vazio*/}
        <View style={styles.cont2}></View>
  
        <View style={styles.footer}>
          <Link href='/telaMenu'>
            <Text style={styles.suporte}>Menu</Text>
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
  
    cont2: {
      flex: 1,
    },
  
    header: {
      flex: 2.7,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    
    InfoTitulo: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      paddingLeft: 16,
    },
  
    infoEncomenda: {
      fontSize: 19,
      color: '#000',
    },
  
    infoDia: {
      fontSize: 12,
      color: '#848282',
    },
  
    icones: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      marginLeft: 10,
      gap: 5,
    },
  
    button:{
      marginLeft: 16,
    },
  
    bntReceber:{
      backgroundColor: '#579DD9',
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 20,
      paddingTop: 5,
      paddingBottom:5,
      width: 125,
      heght: 30
    },
  
    textReceber:{
      color: '#fff',
      fontSize: 16,
      
    },
  
  
    main: {
      flex: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  
    footer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#579DD9',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 1,
      paddingBottom: 1,
      height: 50
    },
  
    suporte: {
      color: '#fff',
      fontSize: 15,
    }

  });

export default telaReceberEncomenda;
