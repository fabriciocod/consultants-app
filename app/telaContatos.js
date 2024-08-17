import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles/styles_Contatos';
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
// import { List } from 'react-native-paper';
// import { useEffect, useState } from 'react/cjs/react.production.min';

const telaContatos = () => {
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = React.useState('');
  const router = useRouter();

  const [contatos, setContatos] = useState([]);
  // const user = auth.currentUser;
  const [deleteContato, setDeleteContato] = useState(null);

  const handleSearch = () => {
  // Lógica de busca
    console.log(`Buscando por: ${searchText}`);
  };

  // Incio do recupera contatos
  const getAllRecuperaContatos = async () => {
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
    getAllRecuperaContatos();
}, [deleteContato]);
// Fim do recupera contatos

// Inicio do delete
const handleDeleteContatos = async (id) => {
  try {
      setLoading(true);

      // Recuperar encomendas associadas ao contato
      const encomendasQuery = query(collection(db, "encomendas"), where("idContato", "==", id));
      const encomendasSnapshot = await getDocs(encomendasQuery);

      // Deletar cada encomenda associada
      const deleteEncomendasPromises = encomendasSnapshot.docs.map(async (encomendaDoc) => {
        await deleteDoc(doc(db, "encomendas", encomendaDoc.id));
      });
      await Promise.all(deleteEncomendasPromises);
      
      // Deletar o contato
      await deleteDoc(doc(db, "contatos", id));
      setDeleteContato(new Date());

  } catch (error) {
      console.error(error);
  } finally {
      setLoading(false);
  }
};
// Fim do delete

// Inicio do CardContato
const Contato = ({id, title, description, setDeleteContato, unit, router}) => (
  <View style={styles.container_cards}>
    <View style={styles.container_contatos}>

      <View style={styles.info_contato}>
        <View style={styles.contato}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={styles.rotulos}>
            <Text style={styles.label}>Contato</Text>
            <Text style={styles.label}>Unidade</Text>
          </View>

          <View style={styles.contato_unidade}>
            <Text style={styles.dados_contato}>{description}</Text>
            <Text style={styles.dados_contato}>{unit}</Text>
          </View>
        </View>

        <View style={styles.nova_encomenda}>
          <Pressable onPress={() => {
            router.push({ pathname: '/tela_novaEncomenda', params: { idContato: id, nomeContato: title } });
            }}>
          <Ionicons name="chevron-forward" size={30} color="#888888" />
          </Pressable>
        </View>
      </View>

      <View style={styles.bnt_editar_excluir}>
          <Ionicons name="create-outline" style={styles.editar} size={24} color="#fff" />
          
          <Pressable onPress={() => handleDeleteContatos(id)}> 
            <Ionicons name="trash-outline" style={styles.excluir} size={24} color="#fff" /> 
          </Pressable>
      </View>
    </View>
  </View>
)
// Fim do cardContato


  return (
    <View style={styles.container}>
      {/* Inicio do Header */}
      <View style={[styles.header, {flex:1.5}]}>

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
              <Contato
                id={item.id}
                title={item.nomeContato}
                description={item.contato}
                unit={item.unidade}
                setDeleteContatos={setDeleteContato}
                router={(router)}
                />
            )}

          />
  )}
      </View>
    
      <View style={[styles.footer, {flex:0.5}]}>
        <Pressable onPress={() => {
          router.push('/telaMenu');
        }}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}



export default telaContatos;
