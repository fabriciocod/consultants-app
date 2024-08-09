import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { Link, useRouter} from 'expo-router';
import styles from './styles/styles_Menu.js';

const telaMenu = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>

      <View style={[styles.header,{flex:1}]}>
        <View style={styles.icones}>
          <Ionicons name="qr-code-outline" size={24} color="#fff"/>
          <Ionicons name="sync-outline" size={24} color="#fff"/>
          <Ionicons name="notifications" size={24} color="#fff"/>
        </View>

        <View style={styles.info_perfil_usuario}>
          <View style={styles.perfil_usuario}>
            <Link href='/telaPerfilUsuario'>
              <Ionicons name="person-sharp" size={50} color="#fff" />
            </Link>
          </View>

          <View style={styles.info_usuario}>
            <Text style={styles.usuario}>Usuário Ativo</Text>
            <Text style={styles.usuarioFuncao}>Função do Usuário</Text>
          </View>
        </View>
      </View>
      
      <View style={[styles.main, {flex:5}]}>
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

      <View style={[styles.footer, {flex:0.5}]}>
        <Link href='#'>
          <Text style={styles.suporte}>Suporte</Text>
        </Link>
      </View>
    
    </View>
  );
}

export default telaMenu