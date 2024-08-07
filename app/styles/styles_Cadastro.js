import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
        
    },
    // Definir regras do logo
    header: {
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

    // Define regras do main
    main: {
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center'
    },

    // Inicio do estilo do inputs
    inputArea:{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000',
        borderBottomWidth: 1,
        marginBottom:15,
        width: '90%',
        height: 50,
        
    
    },

    input:{
        width: '85%',
        height: 50,
        color: '#000',
        padding: 8,
        fontSize: 14
    },

    icon:{
        width: '15%',
    
    },
// Fim do estilo input

    button: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    bntCadastrar: {
        backgroundColor:'#044D8C',
        borderRadius: 8,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 100,
        width: 156,
        height: 50
    },

    cadastrar: {
        color:'#fff',
        fontSize: 18,
        fontWeight:'bold'
    },

    footer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#044D8C',
        paddingLeft: 10,
        paddingRight: 10,
        
    }
});

export default styles