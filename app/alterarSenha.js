import { Text, View, TextInput, Pressable } from 'react-native'
import React, { useState} from 'react';
import { Link } from 'expo-router';
import styles from './styles/styles_Alterar';
import {Ionicons} from '@expo/vector-icons';

const alterarSenha = () => {
  const [codigo, setCodigo] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [hidePass, setHidePass] = useState("");

  return (
    
          <View style={styles.container}>
            {/* espaço vazio */}
            <View style={styles.cont1}></View>

              <View style={styles.main}>
                  <Text style={styles.titulo}>Alterar Senha</Text>

                  <Text style={styles.informe}>
                    Por favor, informe o código recebido
                    para recuperação da senha.
                  </Text>

                  <View style={styles.inputArea}>
                  <TextInput
                  style={styles.input}
                  value={codigo}
                  onChangeText={setCodigo}
                  placeholder='Código'
                  placeholderTextColor='#000'
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

              <View style={styles.senhas}>

              <View style={styles.inputArea}>

                  <TextInput
                  style={styles.input}
                  value={novaSenha}
                  onChangeText={setNovaSenha}
                  placeholder='Nova Senha'
                  placeholderTextColor='#000'
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

                  <View style={styles.inputArea}>

                    <TextInput
                    style={styles.input}
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                    placeholder='Confirmar Senha'
                    placeholderTextColor='#000'
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

                {/* espaço vazio */}
              <View style={styles.cont2}></View>

                <View style={styles.button}>
                  <Pressable style={styles.bntconfirmar}>
                    <Link href="">
                      <Text style={styles.confirmar}>Confirmar</Text>
                    </Link>
                  </Pressable>

                </View>

                {/* espaço vazio */}
              <View style={styles.cont3}></View>
            </View>

          </View>

          );
        }

export default alterarSenha

