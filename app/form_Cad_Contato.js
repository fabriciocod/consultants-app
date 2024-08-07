import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import styles from './styles/styles_Form_Cad_Contato';

const form_Cad_Contato = () => {
  const [nomeContato, setNomeContato] = useState('');
  const [contato, setContato] = useState('');
  const [unidade, setUnidade] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={[styles.header, { flex: 1 }]}>
        <View style={styles.cadContato}>
          <Text style={styles.contato}>Cadastro de Contato</Text>
        </View>

        <View style={styles.bntAddContato}>
          <Pressable style={styles.bntContato}>
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
            value={contato}
            onChangeText={setContato}
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