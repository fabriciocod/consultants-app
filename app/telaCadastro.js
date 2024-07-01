import { Button } from 'react-native-paper';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';



const Telacadastro = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./../assets/background.png')} style={styles.imageBackground}>

            <View style={styles.header}>
                <View style={styles.ico}>
                   
                    <Image source={require('./../assets/ico_voltar.png')}/>
                    
                </View>

                <View style={styles.logo}>
                <Image source={require('./../assets/logo.png')} />

                <Text style={styles.textoLogo}>Consultants Orders</Text>
                </View>
            </View>

            {/* espaço vazio */}
            <View style={styles.cont1}></View>

            <View style={styles.main}>
                <TextInput
                style={styles.input}
                placeholder='Nome'/>

                <TextInput
                style={styles.input}
                placeholder='Email'/>

                <TextInput
                style={styles.input}
                placeholder='Senha'/>
                
                <TextInput
                style={styles.input}
                placeholder='Confirma Senha'/>     
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

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor:'#B0C9D9'
        
    },

    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%'
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
        flex: 4,
        flexDirection: 'column',
        justifyContent:'space-around',
        gap: 10,
        padding: 20
    },

    input: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 8,
        backgroundColor: '#fff',
        padding: 8
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
        width: 265,
        height: 50
    },

    cadastrar: {
        color:'#fff'
    }
   
});

export default Telacadastro;
