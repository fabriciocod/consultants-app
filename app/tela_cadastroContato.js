import React, { useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import styles from './styles/styles_cadastroContato';
import { addDoc, collection} from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';

const telaCadastroContato = () => {
  const [nomeContato, setNomeContato] = useState('');
  const [contato, setContato] = useState('');
  const [unidade, setUnidade] = useState('');
  const router = useRouter();
  const user = auth.currentUser;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCriar = async () => {
    if (!nomeContato || !contato || !unidade) {
      alert("Todos os campos devem ser preenchidos!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
        // setLoading(true);
        await addDoc(collection(db, "contatos"), {
            nomeContato: nomeContato,
            contato: contato,
            unidade: unidade,
            concluida: false, // Por padrão, todas as tarefas são criadas não c
            idUsuario: user.uid
        });
        router.replace('/telaContatos');
    } catch (error) {
        console.error(error.code);
        console.error(error.message);
    } finally {
      setLoading(false);
    }
}
  return (
    <View style={styles.container}>
      <View style={[styles.header, {flex:2}]}>
        
        <View style={styles.cadContato}>
          <Ionicons name="person" size={50} color="#579DD9"/> 
          <Text style={styles.contato}>Cadastro de Contato</Text>
        </View>

        <View style={styles.bntAddContato}>
          <Pressable 
                style={styles.bntContato}
                onPress={handleCriar}
                >
                <Ionicons name="person-add" size={16} color="#fff" />
                <Text style={styles.textContato}>Cadastrar</Text>
              </Pressable>

              <Pressable 
                style={styles.bntEncaminhar}
                onPress={() => {
                  router.push('/');
                }}
                >
                <Ionicons name="person-add" size={16} color="#fff" />
                <Text style={styles.textContato}>Encaminhar</Text>
              </Pressable>
          </View>
        </View>

      <View style={[styles.main, { flex: 5 }]}>
        <View style={styles.infoNomeContato}>
          <TextInput
            style={styles.inputNome}
            value={nomeContato}
            onChangeText={setNomeContato}
            placeholder="Nome Contato"
            placeholderTextColor="#000"
          />

          <Ionicons style={styles.icon} name='create-outline' color='#000' size={25} />
        </View>

        <View style={styles.infoContUni}>
          <View style={styles.inputContato}>
            <TextInput
              value={contato}
              onChangeText={setContato}
              placeholder="Contato"
              placeholderTextColor="#000"
              keyboardType='phone-pad'
            />
            <Ionicons style={styles.icon} name='call-outline' color='#000' size={25} />
          </View>

          <View style={styles.inputUnidade}>
            <TextInput
              value={unidade}
              onChangeText={setUnidade}
              placeholder='Casa / Apto.'
              placeholderTextColor="#000"
              keyboardType='number-pad'
            />
            <Ionicons style={styles.icon} name='business-outline' color='#000' size={25} />
          </View>

        </View>
      </View>

      <View style={[styles.footer, { flex: 0.5 }]}>
        <Pressable onPress={() => 
          router.push('/telaMenu')
          }>
          <Ionicons name='chevron-back-outline' size={24} color="#fff" />
        </Pressable>
      </View>
    </View>
    );
}

export default telaCadastroContato;