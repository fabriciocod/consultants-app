import * as React from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import { Link } from 'expo-router';
import styles from './styles/styles_ReceberEncomenda.js';

const telaReceberEncomenda = () => {
  return (
      <View style={styles.container}>
        {/* Inicio do Header */}
        <View style={[styles.header, {flex:2}]}>

          <View style={styles.icones}>
            <Ionicons name="search" size={24} color="#808080" />
            <Ionicons name="calendar" size={24} color="#808080" />
            <AntDesign name="filter" size={24} color="#808080" />
            <Ionicons name="refresh" size={24} color="#808080" />
          </View>

          <View style={styles.titulo_button}>

          <View style={styles.InfoTitulo}>            
              <Text style={styles.infoEncomenda}>Encomendas</Text>
              <Text style={styles.infoDia}>Hoje</Text>
          </View>

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
          </View>

        </View>
        {/* Fim do Header */}
  
        <View style={[styles.main, {flex:5}]}>
          {/* Conteúdo principal, sem cards */}
        </View>
  
        <View style={[styles.footer, {flex:0.5}]}>
          <Link href='/telaMenu'>
            <Text style={styles.suporte}>Menu</Text>
          </Link>
        </View>
      </View>
    );
  }
  
 

export default telaReceberEncomenda;
