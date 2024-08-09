import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import styles from './styles/styles_novaEncomenda'

const form_Encomenda = () => {
  const[checked, setChecked] = useState('alta');
  const[checkedEnco, setCheckedEnco] = useState('Encomenda');
  const[descricao, setDescricao] = useState('');

  const[data, setData] = useState('');
  const[hora, setHora] = useState('');

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('pt-BR');
    const formattedTime = now.toLocaleTimeString('pt-Br');
    setData(formattedDate);
    setHora(formattedTime);
  }, []);
  
  return (
    <View style={styles.container}>
        <View style={[styles.header, {flex:1}]}>
          <Text style={styles.titulo}>Nova Encomenda</Text>
          <Text style={styles.info_contato}>Nome do Contato</Text>
        </View>

        <View style={[styles.main, {flex:5}]}>
            <View style={styles.data_hora_container}>
              <View style={styles.data}>
                <Ionicons name="calendar" size={40} color="#808080" />
                <Text>{data}</Text>
              </View>

              <View style={styles.horas}>
                <Ionicons name="time" size={40} color="#808080" />
                <Text>{hora}</Text>
              </View>
            </View>

            <View style={styles.prioridade_container}>

              <Text style={styles.text_topico}>Prioridade</Text>

              <View style={styles.tipo_prioridade}>
                <RadioButton
                value='alta'
                status={ checked === 'alta' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('alta')}
                />

                <Text style={styles.text_tipo}>Alta</Text>

                <RadioButton
                value='media'
                status={ checked === 'media' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('media')}
                />

                <Text style={styles.text_tipo}>Média</Text>

                <RadioButton
                value='baixa'
                status={ checked === 'baixa' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('baixa')}
                />

                <Text style={styles.text_tipo}>Baixa</Text>
              </View>
            </View>

            <View style={styles.tipo_container}>

              <Text style={styles.text_topico}>Tipo de Encomenda</Text>
            <View style={styles.tipo_encomendas}>
                <RadioButton
                  value='Encomenda'
                  status={ checkedEnco === 'encomneda' ? 'checkedEnco' : 'uncheckedEnco'}
                  onPress={() => setCheckedEnco('encomenda')}
                  />

                  <Text style={styles.text_tipo}>Encomenda</Text>

                  <RadioButton
                  value='Documento'
                  status={ checkedEnco === 'documento' ? 'checkedEnco' : 'uncheckedEnco'}
                  onPress={() => setCheckedEnco('documento')}
                  />

                  <Text style={styles.text_tipo}>Documento</Text>

                  <RadioButton
                  value='Encomenda Morador'
                  status={ checkedEnco === 'encomenda morador' ? 'checkedEnco' : 'uncheckedEnco'}
                  onPress={() => setCheckedEnco('encomenda morador')}
                  />

                  <Text style={styles.text_tipo}>Encomenda Morador</Text>
            </View>

            <View style={styles.desc_Container}>
              <TextInput
              style={styles.descricao}
              multiline
              numberOfLines={4}
              value={descricao}
              onChangeText={setDescricao}
              placeholder='Descrição'
              />
            </View>
          </View>

          <View style={[styles.footer, {flex:0.5}]}>
            <Link href='#'>
              <Ionicons name="chevron-back-outline" size={24} color="#fff"/>
            </Link>
            
            <Pressable>
              <Text style={styles.bnt_Salvar}>Salvar</Text>
            </Pressable>
          </View>
      </View>
    </View>
  );
}

export default form_Encomenda