import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { Link } from 'expo-router';
import styles from './styles/styles_CadastroContatos.js';

const telaCadastroContato = () => {
  const [nome, setNome] = useState('');
  const [numeroContato, setNumeroContato] = useState('');
  const [numeroUnidade, setNumeroUnidade] = useState('');

  return (
    <View style={styles.container}>
      {/* Inicio do Header */}
      <View style={[styles.header, {flex:2}]} >
        <View style={styles.InfoTitulo}>
          <View>
            <Text style={styles.infoCadastrar}>Cadastrar Contato</Text>
          </View>
        </View>
        <View style={styles.bntAdicioCancelar}>
          <Pressable style={styles.bntAdicionar}>
            <Link href='#'>
              <Text style={styles.textContato}>+ Adicionar</Text>
            </Link>
          </Pressable>

          <Pressable style={styles.bntCancelar}>
            <Link href='#'>
              <Text style={styles.textContato}>- Cancelar</Text>
            </Link>
          </Pressable>
        </View>
      </View>
      {/* Fim do Header */}
      
      <View style={[styles.main, {flex:5}]}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder='Nome Completo'
            placeholderTextColor='#000'
          />
          <Ionicons style={styles.icon} name='person-outline' color='#000' size={25} />
        </View>

        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={numeroContato}
            onChangeText={setNumeroContato}
            placeholder='Contato'
            placeholderTextColor='#000'
          />
          <Ionicons style={styles.icon} name='call-outline' color='#000' size={25} />
        </View>

        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={numeroUnidade}
            onChangeText={setNumeroUnidade}
            placeholder='Unidade'
            placeholderTextColor='#000'
          />
          <Ionicons style={styles.icon} name='business-outline' color='#000' size={25} />
        </View>
      </View>

      <View style={[styles.footer, {flex:0.5}]}>
        <Link href='/telaContatos'>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </Link>
      </View>
    </View>
  );
}

export default telaCadastroContato;
