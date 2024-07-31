import { Text, View, TextInput, Pressable } from 'react-native'
import React, { useState} from 'react';
import { Link } from 'expo-router';
import styles from './styles/styles_Alterar';
import {Ionicons} from '@expo/vector-icons';

const telaAlterarSenha = () => {
  const [codigo, setCodigo] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [hideNewPass, setHideNewPass] = useState (true);
  const [hideConfPass, setHideConfPass] = useState (true);
  return (
    
    <View style={styles.container}>
      <View style={styles.main}>

        <View style={styles.texto}>

          <Text style={styles.titulo}>Alterar Senha</Text>
              <Text style={styles.paragrafo}>
                  Por favo, informe o código
                  recebido para alterar a senha.
              </Text>

          </View>

        <View style={styles.cont_codigo}>
                
            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                      value={codigo}
                      placeholder='Código'
                      placeholderTextColor='#000'
                      onChangeText={setCodigo}
                      secureTextEntry={hidePass}
                    />
                    <Pressable style={styles.icon} onPress={() => setHidePass(!hidePass)}>

                    { hidePass ? //Formatação condicional para estado do icones
                    <Ionicons name='lock-closed-outline' color='#000' size={25}/>
                    :
                    <Ionicons name='lock-open-outline' color='#000' size={25}/>
                    }
              
                    </Pressable>
              </View>
                    
          </View>

          <View style={styles.cont_AlterarSenhas}>
                  
            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                      value={novaSenha}
                      placeholder='Nova Senha'
                      placeholderTextColor='#000'
                      onChangeText={setNovaSenha}
                      secureTextEntry={hideNewPass}
                    />
                    <Pressable style={styles.icon} onPress={() => setHideNewPass(!hideNewPass)}>

                    { hideNewPass ? //Formatação condicional para estado do icones
                    <Ionicons name='lock-closed-outline' color='#000' size={25}/>
                    :
                    <Ionicons name='lock-open-outline' color='#000' size={25}/>
                    }
              
                    </Pressable>
              </View>

              <View style={styles.inputArea}>
                <TextInput
                  style={styles.input}
                        value={confirmarSenha}
                        placeholder='Confirmar Senha'
                        placeholderTextColor='#000'
                        onChangeText={setConfirmarSenha}
                        secureTextEntry={hideConfPass}
                      />
                      <Pressable style={styles.icon} onPress={() => setHideConfPass(!hideConfPass)}>

                      { hideConfPass ? //Formatação condicional para estado do icones
                      <Ionicons name='lock-closed-outline' color='#000' size={25}/>
                      :
                      <Ionicons name='lock-open-outline' color='#000' size={25}/>
                      }
                
                      </Pressable>
              </View>
                  
          </View>

          <View style={styles.cont_Confirmar}>
            <Pressable style={styles.bntConfirmar}>
              <Text style={styles.textConfirmar}>Confirmar</Text>
            </Pressable>
          </View>
      </View>
  </View>
           
  );
}
export default telaAlterarSenha

