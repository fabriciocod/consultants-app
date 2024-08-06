import * as React from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { Link } from 'expo-router';

const telaContatos = () => {
  const [searchText, setSearchText] = React.useState('');

  const handleSearch = () => {
    // Lógica de busca
    console.log(`Buscando por: ${searchText}`);
  };

  return (
    <View style={styles.container}>
      {/* Inicio do Header */}
      <View style={styles.header}>

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
        
        <View style={styles.cont0}/>

        <View style={styles.InfoTitulo}>
          <View>
            <Text style={styles.infoContato}>Contatos</Text>
            
          </View>
          <View>
            <Pressable style={styles.bntContato}>
              <Link href='/form_Cad_Contato'>
                <Text style={styles.textContato}>+ Contato</Text>
              </Link>
            </Pressable>
          </View>
        </View>

        
      </View>
      {/* Fim do Header */}
      
      {/* espaço vazio*/}
      <View style={styles.cont1}></View>

      <View style={styles.main}>
        {/* Conteúdo principal, sem cards */}
      </View>
      
      {/* espaço vazio*/}
      <View style={styles.cont2}></View>

      <View style={styles.footer}>
        <Link href='/telaMenu'>
            <Ionicons name="chevron-back" size={24} color="#fff" />
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

cont:{
    flex: 1
},

cont1: {
    flex: 1,
},

cont2: {
    flex: 1,
},

header: {
    flex: 2.7,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
},

InfoTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16
},

infoContato: {
    fontSize: 19,
    color: '#000',
},

searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
},

searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
},

searchIcon: {
    marginLeft: 10,
},

bntContato: {
    backgroundColor: '#579DD9',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 16,
},

textContato: {
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#579DD9',
    padding: 10,
    height: 50
},

});

export default telaContatos;
