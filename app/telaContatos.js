import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View, TextInput } from 'react-native';
import { Link, useRouter } from 'expo-router';
import styles from './styles/styles_Contatos';

const telaContatos = () => {
  const [searchText, setSearchText] = React.useState('');
  const router = useRouter();

  const handleSearch = () => {
    // Lógica de busca
    console.log(`Buscando por: ${searchText}`);
  };

  return (
    <View style={styles.container}>
      {/* Inicio do Header */}
      <View style={[styles.header, {flex:2}]}>

        <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar contato"
              placeholderTextColor="#808080"
              value={searchText}
              onChangeText={setSearchText}
            />
            <Ionicons
              name="search"
              size={24}
              color="#808080"
              onPress={handleSearch}
              style={styles.searchIcon}
            />
          </View>
        
        <View style={styles.InfoTitulo}>
          <View>
            <Text style={styles.infoContato}>Contatos</Text>
            
          </View>
          <View>
            <Pressable 
              style={styles.bntContato}
              onPress={() => {
                router.push('/tela_cadastroContato');
              }}
              >
              <Ionicons name="person-add" size={16} color="#fff" />
              <Text style={styles.textContato}>Contato</Text>
            </Pressable>
          </View>
        </View>
        
      </View>
      {/* Fim do Header */}

      <View style={[styles.main, {flex:5}]}>
        {/* Conteúdo principal, sem cards */}
      </View>
      
      {/* espaço vazio*/}
      <View style={styles.cont2}></View>

      <View style={[styles.footer, {flex:0.5}]}>
        <Link href='/telaMenu'>
            <Ionicons name="chevron-back" size={24} color="#fff" />
        </Link>
      </View>
    </View>
  );
}



export default telaContatos;
