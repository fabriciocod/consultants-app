import React, { useState } from 'react';
import { Text, View,Pressable, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { addDoc, colletion } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig'
import { Link, useRouter } from 'expo-router';
import styles from './styles/styles_Form_Cad_Contato';
6

const form_Cad_Contato = () => {
  const [nomeContato, setNomeContato] = useState('');
  const [numeroContato, setNumeroContato] = useState('');
  const [unidade, setUnidade] = useState('');
  const router = useRouter();
  const user = auth.currentUser;

  const handleCriar = async () => {
    try {
        setLoading(true);
        await addDoc(collection(db, "contato"), {
            // Os nomes do lado esquerdo (key) serão usados para armazenar o dado no Firestore.
            // Lado direito (value) é o valor que será armazenado. Apontam para um state ou valor fixo.
            nomeContato: nomeContato,
            numeroContato: numeroContato,
            unidade: unidade,
            concluida: false, // Por padrão, todas as tarefas são criadas não concluídas.
            idUsuario: user.uid
        });
        router.replace('/contato');
    } catch (error) {
        console.error(error.code);
        console.error(error.message);
    } finally {
        setLoading(false);
    }
}

  return (
    <View style={styles.container}>
      <View style={[styles.header, { flex: 1 }]}>
        <View style={styles.cadContato}>
          <Text style={styles.contato}>Cadastro de Contato</Text>
        </View>

        <View style={styles.bntAddContato}>
          <Pressable style={styles.bntContato} onPress={handleCriar}>
            <Link href="#">
              <Text style={styles.textContato}>+ Contato</Text>
            </Link>
          </Pressable>
        </View>
      </View>

      <View style={[styles.main, { flex: 3 }]}>
        <View style={styles.infoNomeContato}>
          <TextInput
            style={styles.inputNome}
            value={nomeContato}
            onChangeText={setNomeContato}
            placeholder="Nome Contato"
            placeholderTextColor="#000"
          />
        </View>

        <View style={styles.infoContUni}>
          <TextInput
            style={styles.inputContato}
            value={numeroContato}
            onChangeText={setNumeroContato}
            placeholder="Contato"
            placeholderTextColor="#000"
          />
          <View style={{width:20}}/>

          <TextInput
            style={styles.inputUnidade}
            value={unidade}
            onChangeText={setUnidade}
            placeholder="Unidade"
            placeholderTextColor="#000"
          />
        </View>
      </View>

      <View style={[styles.footer, { flex: 0.5 }]}>
        <Link href="/telaContatos">
          <Ionicons name="chevron-back-outline" size={24} color="#fff" />
        </Link>
      </View>
    </View>
  );
}

export default form_Cad_Contato;