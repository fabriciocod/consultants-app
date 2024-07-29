import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signOut} from 'firebase/auth';
import { useRouter} from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Link } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

const TelaPerfilUsuario = () => {
    const [senhaAtual, setSenhaAtual] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [hideCurretPass, setHideCurretPass] = useState(true);
    const [hideNewPass, setHideNewPass] = useState(true);
    const [avatar, setAvatar] = useState(null);
    const [userRole, setUserRole] = useState('Admin'); // Exemplo de função do usuário
    const [userCode, setUserCode] = useState('ABC123'); // Exemplo de código de usuário

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setAvatar(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            {/* Inicio do Header */}
            <View style={styles.header}>
                <View style={styles.perfAvatar}>
                    <Pressable onPress={pickImage}>
                        {avatar ? (
                            <Image source={{ uri: avatar }} style={styles.avatarImage} />
                        ) : (
                        <Ionicons name="person-sharp" size={50} color="#fff" />
                        )}
                    </Pressable>
                    <Text style={styles.altera}>Alterar Foto</Text>
                </View>
            </View>
            {/* Fim do Header */}

            {/* espaço vazio*/}
            <View style={styles.cont1}></View>

            <View style={styles.main}>
                {/* Inicio navegação do app */}
                <View style={styles.infoStatus}>
                    <Text style={styles.textVoce}>Você</Text>
                    <Text style={styles.textColabora}>{userRole}</Text>
                </View>

                <View style={styles.infoCodigo}>
                    <Text style={styles.login}>Login</Text>
                    <Text style={styles.codigo}>{userCode}</Text>
                </View>

                <View style={styles.alteraSenha}>
                    <View style={styles.inputArea}>
                        <TextInput
                            style={styles.input}
                            value={senhaAtual}
                            placeholder='Senha Atual'
                            placeholderTextColor='#bbb'
                            onChangeText={(senhaAtual) => setSenhaAtual(senhaAtual)}
                            secureTextEntry={hideCurretPass}
                        />
                        <Pressable style={styles.icon} onPress={() => setHideCurretPass(!hideCurretPass)}>
                            {hideCurretPass ? (
                                <Ionicons name='lock-closed-outline' color='#fff' size={25} />
                            ) : (
                                <Ionicons name='lock-open-outline' color='#fff' size={25} />
                            )}
                        </Pressable>
                    </View>

                    <View style={styles.inputArea}>
                        <TextInput
                            style={styles.input}
                            value={novaSenha}
                            placeholder='Nova Senha'
                            placeholderTextColor='#bbb'
                            onChangeText={(novaSenha) => setNovaSenha(novaSenha)}
                            secureTextEntry={hideNewPass}
                        />
                        <Pressable style={styles.icon} onPress={() => setHideNewPass(!hideNewPass)}>
                            {hideNewPass ? (
                                <Ionicons name='lock-closed-outline' color='#fff' size={25} />
                            ) : (
                                <Ionicons name='lock-open-outline' color='#fff' size={25} />
                            )}
                        </Pressable>
                    </View>
                </View>

                <View style={styles.cont_Altera}>
                    <Pressable style={styles.bntRedefinir}>
                        <Link href='/telaMenu'>
                            <Text style={styles.redefinirSenha}>Alterar Senha</Text>
                        </Link>
                    </Pressable>
                </View>
                {/* Fim navegação do app */}
            </View>

            {/* espaço vazio*/}
            <View style={styles.cont2}></View>

            <View style={styles.footer}>
                <Link href='/telaMenu'>
                    <Ionicons name="chevron-back-outline" size={24} color="#fff" onPress={() => {
                fazerLogout(auth, router);
            }}/>
                </Link>
                <Link href='#'>
                    <Text style={styles.desconectar}>Desconectar</Text>
                </Link>
            </View>
        </View>
    );
};

// Teste de implementação do LogOut
const Cliques = () => {
    const [getCliques, setCliques] = useState(0);
    const user = auth.currentUser;
    const router = useRouter();

    const fazerLogout = (auth, router) => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('Logout com sucesso');
            router.replace('/');
        }).catch((error) => {
            // An error happened.
            console.error(error);
        });
    }}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#044d8c',
    },
    cont1: {
        flex: 1,
    },
    cont2: {
        flex: 1,
    },
    header: {
        flex: 2,
        backgroundColor: "#044d8c",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    perfAvatar: {
        alignItems: 'center',
    },
    avatarImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },

    altera: {
        fontSize: 12,
        color: '#fff',
        marginTop: 8,
    },
    main: {
        flex: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    infoStatus: {
        marginBottom: 20,
    },
    textVoce: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
    },
    textColabora: {
        fontSize: 16,
        color: '#bbb',
    },
    infoCodigo: {
        marginBottom: 20,
    },
    login: {
        fontSize: 18,
        color: '#fff',
    },
    codigo: {
        fontSize: 14,
        color: '#bbb',
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        paddingTop: 5,
    },
    alteraSenha: {
        marginBottom: 20,
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        color: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontSize: 16,
    },
    icon: {
        padding: 10,
    },
    cont_Altera: {
        alignItems: 'center',
    },
    bntRedefinir: {
        backgroundColor: '#fff',
        borderRadius: 5,
        width: '100%',
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    redefinirSenha: {
        fontSize: 16,
        color: '#044d8c',
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: '#044d8c',
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 50
    },
    desconectar: {
        color: '#fff',
        fontSize: 16,
    },
});

export default TelaPerfilUsuario;
