import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import styles from './styles/styles_novaEncomenda'

const form_Encomenda = () => {
  const[checkedPrioridade, setCheckedPrioridade] = useState('alta');
  const[checkedEncomenda, setCheckedEncomenda] = useState('encomenda');
  const[descricao, setDescricao] = useState('');

  const router = useRouter('');
  const[data, setData] = useState('');
  const[hora, setHora] = useState('');

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('pt-BR');
    const formattedTime = now.toLocaleTimeString('pt-BR');
    setData(formattedDate);
    setHora(formattedTime);
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={[styles.header, {flex:1}]}>
        <View style={styles.titulo}>
          <View>
            <Ionicons name="cube-outline" size={50} color="#579DD9" />
            </View>
        </View>

        <View>
            <Text style={styles.text_Titulo}>Nova Encomenda</Text>
            <Text style={styles.text_Nome}>Nome Morador</Text>
        </View>
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

        <View style={styles.prioridade}>
          <Text style={styles.text_Prioridade}>Prioridade</Text>

          <View style={styles.tipo_Prioridade}>
            <RadioButton
              value="alta"
              status={checkedPrioridade === 'alta' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedPrioridade('alta')}
            />

            <Text style={styles.text_tipo}>Alta</Text>

            <RadioButton
              value="media"
              status={checkedPrioridade === 'media' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedPrioridade('media')}
            />

            <Text style={styles.text_tipo}>Média</Text>

            <RadioButton
              value="baixa"
              status={checkedPrioridade === 'baixa' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedPrioridade('baixa')}
            />

            <Text style={styles.text_tipo}>Baixa</Text>
          </View>
        </View>

        <View style={styles.encomenda}>
          <Text style={styles.text_Encomenda}>Tipo de Encomenda</Text>
          <View style={styles.tipo_Encomenda}>
          <RadioButton
                value="encomenda"
                status={checkedEncomenda === 'encomenda' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedEncomenda('encomenda')}
              />

              <Text style={styles.text_tipo}>Encomenda</Text>

              <RadioButton
                value="documento"
                status={checkedEncomenda === 'documento' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedEncomenda('documento')}
              />

              <Text style={styles.text_tipo}>Documento</Text>

              <RadioButton
                value="morador"
                status={checkedEncomenda === 'morador' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedEncomenda('morador')}
              />

              <Text style={styles.text_tipo}>Morador</Text>
          </View>
        
        
        </View>

        <View style={styles.cont_descricao}>
          <TextInput
            style={styles.descricao}
            multiline
            numberOfLines={4}
            value={descricao}
            onChangeText={setDescricao}
            placeholder="Descrição"
          />
        </View>
      </View>

      <View style={[styles.footer, { flex: 0.5 }]}>
          <Ionicons name="chevron-back-outline" size={24} color="#fff" />

          <Pressable
            style={styles.bnt_Salvar}
            onPres={() => {
              router.push('/');
            }}>
            <Text style={styles.text_Salvar}>Salvar</Text>
          </Pressable>
      </View>
    </View>
  );
}

export default form_Encomenda