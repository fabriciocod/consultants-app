import React, { useState, useEffect} from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Pressable, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { Link, useRouter } from 'expo-router';
import styles from './styles/styles_ReceberEncomenda.js';
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';


const telaReceberEncomenda = () => {
  const[encomendas, setEncomendas] = useState([]);
  const[loading, setLoading] = useState(true);
  const router = useRouter();

    // Incio do recupera encomenda
    const getAllRecuperaEncomendas = async () => {
      try {
          const querySnapshot = await getDocs(query(collection(db, "encomendas")));
          let array = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setEncomendas(array);
      } catch (error) {
          console.error(error);
      } finally {
          setLoading(false);
        }
  };
  
  useEffect(() => {
      getAllRecuperaEncomendas();
  }, []);
  // Fim do recupera encomendas
  
  // Inicio card status

  const Encomenda = ({title, description, hours}) => (
    <View style={styles.container_status}>
      <View style={styles.container_cardStatus}>
        <View style={styles.info_encomenda}>
          
          <View style={styles.contato_horas}>
            <Text style={styles.contato}>{title}</Text>
            <Text style={styles.horas}>{hours}h</Text>
          </View>
          
          <View styles={styles.descricao}>
            <Text style={styles.description}>{description}</Text>
          </View>

          <View style={styles.statusEncomenda}>
          <Text style={styles.id}>ID: xxxx-xxxx</Text>
          <Text style={styles.status}>Aguardando</Text>
          </View>
        </View>

        <View style={styles.finalizar_encomenda}>
        <Ionicons name="chevron-forward" size={24} color="#000" />  
        </View>
      </View>
    </View>
    
  );
  // Fim card status

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
          </View>

        </View>
        {/* Fim do Header */}
  
        <View style={[styles.main, {flex:5}]}>
          {loading ? (

          <ActivityIndicator size ='large' color='#579DD9'/>
          ) : (
        <FlatList
            data={encomendas}
            renderItem={({item}) => (
              <Encomenda
                id={item.uid}
                title={item.nomeContato}
                description={item.descricaoEncomenda}
                hours={item.hora}
              />
            )}
            ListEmptyComponent={<Text style={styles.notificacao}>Sem Encomenda</Text>}            
          />
  )}
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
