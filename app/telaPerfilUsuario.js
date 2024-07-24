import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const TelaPerfilUsuario = () => {
    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.perfAvatar}>
                    < Ionicons name="person-sharp" size={70} color='#fff' style={styles.icon_Avatar}/>
                    <Text style={styles.altera}>Alterar Foto</Text>
                </View>
                
            </View>

        {/* espaço vazio*/}
        <View style={styles.cont1}></View>

            <View styles={styles.main}>
                <Text>Main</Text>
            </View>

        {/* espaço vazio*/}
        <View style={styles.cont2}></View>

            <View style={styles.footer}>
                <Link href='/telaMenu'>
                    <Ionicons name="chevron-back-outline" size={24} color="#fff" />
                </Link>
                <Pressable>
                <Text style={styles.desconectar}>Desconectar</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    cont1: {
        flex: 1,
      },
    
      cont2:{
        flex: 1,
    },

    header: {
        flex: 2.7,
        backgroundColor: "#044d8c",
        flexDirection: 'row',
        justifyContent: 'space-between',
          
    },

    perfAvatar: {
        flexDirection: 'column',
        justifyContent: 'center',
        widht: 50,
        alignItems: 'center',
        gap: 1,
        paddingLeft: 16
        
    },
    
    altera:{
        fontSize: 10,
        color: '#808080'
    },

    main: {
        flex: 10,
    },

    footer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: '#044D8C',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 1,
        paddingBottom: 1,  
    },
    
      desconectar: {
        color:'#fff',
        fontSize: 15,
    }
});

export default TelaPerfilUsuario;