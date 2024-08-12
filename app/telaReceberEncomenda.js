import * as React from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import { Link, useRouter } from 'expo-router';
import styles from './styles/styles_ReceberEncomenda.js';

const telaReceberEncomenda = () => {
  const router = useRouter();
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

          <View style={styles.InfoTitulo}>
            <View>
              <Ionicons name="cube-outline" size={50} color="#579DD9"/>
            </View>
            <View>            
            <Text style={styles.infoEncomenda}>Encomendas</Text>
            <Text style={styles.infoDia}>Hoje</Text>
            </View>
          </View>

          <View style={styles.titulo_button}>
              <Pressable style={styles.bntReceber}
              onPress={() =>{
                router.push('/telaContatos')
              }}>

              <Ionicons name="cube" size={24} color="#fff" />  
              <Text style={styles.textReceber}>Receber</Text>
              </Pressable>

              <Pressable style={styles.bntReceber}
              onPress={() =>{
                router.push('/tela_novaEncomenda')
              }}>

              <Ionicons name="cube" size={24} color="#fff" />
              <Text style={styles.textReceber}>Encomenda</Text>
              </Pressable>
            
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
