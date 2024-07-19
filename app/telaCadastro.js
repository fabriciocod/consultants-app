import { Icon, MD3Colors } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import * as React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';




const Telacadastro = () => {
    const [text, setText] = React.useState("");
    return (
        <View style={styles.container}>
            {/* <ImageBackground source={require('./../assets/background.png')} style={styles.imageBackground}> */}

        <View style={styles.cont0}></View>
            <View style={styles.header}>
                {/* <View style={styles.ico}>
                   
                    <Image source={require('./../assets/ico_voltar.png')}/>
                    
                </View> */}

                <View style={styles.logo}>
                <Image source={require('./../assets/logo.png')} />

                <Text style={styles.textoLogo}></Text>
                </View>
            </View>

            {/* espaço vazio */}
            <View style={styles.cont1}></View>

                <View style={styles.main}>
                    <TextInput
                    mode='flat'
                    style={styles.input}
                    label='Nome'
                    value={text}
                    textColor='Black'
                    right={<TextInput.Icon icon="note-edit-outline" color="#000"/>}


                    onChangeText={text => setText(Text)}
                    />

                    <TextInput
                    mode='flat'
                    style={styles.input}
                    label='E-mail'
                    value={text}
                    textColor='Black'
                    right={<TextInput.Icon icon="email-outline" color="#000"/>}

                    onChangeText={text => setText(Text)}
                    />

                    <TextInput
                    mode='flat'
                    style={styles.input}
                    label='Senha'
                    secureTextEntry
                    value={text}
                    textColor='Black'
                    right={<TextInput.Icon icon="shield-outline" color="#000"/>}

                    onChangeText={text => setText(Text)}
                    />
                
                    <TextInput
                    mode='flat'
                    style={styles.input}
                    label='Confirmar Senha'
                    secureTextEntry
                    value={text}
                    textColor='Black'
                    right={<TextInput.Icon icon="shield-outline" color="#000"/>}

                    onChangeText={text => setText(Text)}
                    />
               
                </View>

            {/* espaço vazio */}
            <View style={styles.cont2}></View>

            <View style={styles.button}>
             <TouchableOpacity style={styles.bntCadastrar}>
             <Text style={styles.cadastrar}>Cadastrar</Text>
             </TouchableOpacity>
            </View>

            {/* espaço vazio */}
            <View style={styles.cont3}></View>
            
            <View style={styles.footer}>

                <Link href='/'>
                    <Icon
                    source="arrow-left"
                    color={MD3Colors.error100}
                    size={25}
                    />
                </Link>

            </View>

            {/* </ImageBackground> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
        
    },

    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%'
    },
    cont0:{
        flex:1,
    },
    cont1:{
        flex:2,
    },

    cont2:{
        flex:1, 
    },

    cont3:{
        flex:3, 
    },

    // Definir regras do logo
    header: {
        // borderWidth:1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap:10,
        padding: 8,
        
    },

       logo: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    textoLogo: {
        fontSize: 18,
        color:'#044D8C'
    },

    // Define regras do main
    main: {
        flex: 7,
        flexDirection: 'column',
        justifyContent:'space-around',
        gap: 25,
        padding: 10
    },

    input: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontSize: 14,
        backgroundColor:'none',
        width: 340,
        padding: 1,
    },

    button: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    bntCadastrar: {
        
        backgroundColor:'#044D8C',
        borderRadius: 8,
        justifyContent:'center',
        alignItems:'center',
        width: 156,
        height: 50
    },

    cadastrar: {
        color:'#fff'
    },

    footer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#044D8C',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5
      
      }
   
});

export default Telacadastro;
