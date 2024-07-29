import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View} from 'react-native';
import { Link } from 'expo-router';
import styles from './styles/styles_Menu.js';

const telaMenu = () => {
  return (
    <View style={styles.container}>
      {/* Inicio do Header */}
      <View style={styles.header}>

        <View style={styles.perfil}>
          <View>
            <Link href='/telaPerfilUsuario'>
              <Ionicons name="person-sharp" size={50} color="#fff" />
            </Link>
          </View>
          
          <View>
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
          <Link href='/telaReceberEncomenda'>
            <View style={styles.card}>
            < Ionicons name="cube" size={40} color="#579DD9" style={styles.icon_topico}/>
            <Text style={styles.topico}>Receber</Text>
            </View>
          </Link>
        

        
          <Link href='/telaContatos'>
            <View style={styles.card}>
            < Ionicons name="person-sharp" size={40} color="#579DD9" style={styles.icon_topico}/>
            <Text style={styles.topico}>Contatos</Text>
            </View>
          </Link>
        

        
          <Link href='#'>
            <View style={styles.card}>
            < Ionicons name="reader" size={40} color="#579DD9" style={styles.icon_topico}/>
            <Text style={styles.topico}>Relatório</Text>
            </View>
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

export default telaMenu;