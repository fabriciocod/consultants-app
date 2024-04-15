import { View, Text, StyleSheet, ImageBackground, Image, TextInput} from 'react-native';



const Telacadastro = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./../assets/background.png')} style={styles.imageBackground}>
            <View style={styles.iconLogo}>
                <Image source={require('./../assets/ico_voltar.png')} style={styles.ico}/>

                <Image source={require('./../assets/logo.png')} style={styles.logo}/>

                <Text style={styles.textoLogo}>Consultants Orders</Text>
            </View>

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

            <View style={styles.button}>
             <Text style={styles.btCadastrar}>Cadastrar</Text>
            </View>

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems: 'center',
        padding: 1
    },

    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        width: '100%'
    },
    // Definir regras do logo
    iconLogo: {
    flexDirection: 'row',
    
    alignItems: 'center',
    borderWidth: 1,
    // borderColor: '#fff',
    marginTop: 10,
    padding: 8,
    position: 'absolute',
    top: 10,
    width: 360
    },

    textoLogo: {
        fontSize: 20
    },

    // Define regras do main
    main: {
    // borderWidth: 1,
    // flex: -1,
    flexDirection: 'column',
    justifyContent:'space-around',
    alignItems: 'center',
    // columnGap: 50,
    gap: 20,
    padding: 10,
    position: 'absolute',
    },

    input: {
        backgroundColor: '#D9D9D9',
        borderRadius: 8,
        padding: 10,
        width: 295
    },

    button: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btCadastrar: {
        borderWidth: 3,
        borderColor: '#000',
        borderRadius: 8,
        textAlign: 'center',
        padding: 10,
        width: 263
    }
});

export default Telacadastro;
