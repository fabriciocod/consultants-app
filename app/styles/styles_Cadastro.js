import { StyleSheet } from "react-native";

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

    // Define regras do main
    main: {
        flex: 7,
        flexDirection: 'column',
        justifyContent:'space-around',
        alignItems:'center'
        // gap: 25,
        // padding: 10
    },

    // Inicio do estilo do inputs
    inputArea:{
        flexDirection: 'row',
        width: '90%',
        borderRadius: 5,
        borderColor: '#000',
        borderBottomWidth: 1,
        height: 50,
        alignItems: 'center'
    
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

export default styles