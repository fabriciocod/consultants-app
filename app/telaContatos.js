import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Link, useRouter } from 'expo-router';
import styles from './styles/styles_Contatos';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import { List } from 'react-native-paper';
// import { useEffect, useState } from 'react/cjs/react.production.min';

const telaContatos = () => {
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = React.useState('');
  const router = useRouter();

  const [contatos, setContatos] = useState([]);
  // const user = auth.currentUser;

  const handleSearch = () => {
    // Lógica de busca
    console.log(`Buscando por: ${searchText}`);
  };

  const getAllContatos = async () => {
    try {
        const querySnapshot = await getDocs(query(collection(db, "contatos")));
        let array = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setContatos(array);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
      }
};

useEffect(() => {
    getAllContatos();
}, []);

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
        {loading ? (

          <ActivityIndicator size ='large' color='#579DD9'/>
          ) : (
        <FlatList
            data={contatos}
            renderItem={({item}) => (
              <List.Item 
                title={item.nomeContato}
                description={item.contato}
                />
            )}
          />
  )}
      </View>
    
      <View style={[styles.footer, {flex:0.5}]}>
        <Link href='/telaMenu'>
            <Ionicons name="chevron-back" size={24} color="#fff" />
        </Link>
      </View>
    </View>
  );
}



export default telaContatos;
