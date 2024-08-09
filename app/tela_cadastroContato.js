import React, { useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import styles from './styles/styles_cadastroContato'

const telaCadastroContato = () => {
  const [nomeContato, setNomeContato] = useState('');
  const [contato, setContato] = useState('');
  const [unidade, setUnidade] = useState('');
  const router = useRouter();

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
                onPress={() => {
                  router.push('/');
                }}
                >
                <Ionicons name="person-add" size={16} color="#fff" />
                <Text style={styles.textContato}>Contato</Text>
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
            placeholder='Unidade'
            placeholderTextColor="#000"
          />
        </View>
      </View>

      <View style={[styles.footer, { flex: 0.5 }]}>
        <Link href='telaMenu'>
          <Ionicons name='chevron-back-outline' size={24} color="#fff" />
        </Link>
      </View>
    </View>
    );
}

export default telaCadastroContato;