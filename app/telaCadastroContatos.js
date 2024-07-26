import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { Link } from 'expo-router';

const telaCadastroContato = () => {
  const [nome, setNome] = useState('');
  const [numeroContato, setNumeroContato] = useState('');
  const [numeroUnidade, setNumeroUnidade] = useState('');

  return (
    <View style={styles.container}>
      {/* Inicio do Header */}
      <View style={styles.header}>
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
      
      <View style={styles.main}>
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

      <View style={styles.footer}>
        <Link href='/telaReceberEncomenda'>
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
    justifyContent: 'space-between',
  },

  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
  },

  InfoTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },

  infoCadastrar: {
    fontSize: 19,
    color: '#000',
  },

  bntAdicioCancelar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },

  bntAdicionar: {
    backgroundColor: '#579DD9',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 16,
    width: 120,
  },

  bntCancelar: {
    backgroundColor: '#6D0909',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 16,
    width: 120,
  },

  textContato: {
    color: '#fff',
    fontSize: 16,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
    paddingBottom: 5,
  },

  input: {
    flex: 1,
    color: '#000',
    fontSize: 16,
    paddingVertical: 10,
  },

  icon: {
    marginLeft: 10,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#579DD9',
    padding: 10,
    height: 50,
  },
});

export default telaCadastroContato;
