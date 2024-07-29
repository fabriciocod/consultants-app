import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent:'space-around',
        backgroundColor:'#fff'
    },

    cont1: {
        flex:4,
        // backgroundColor:'#fff'
    },

    cont2: {
        flex:1,
        // backgroundColor:'#fff'
    },

    cont3:{
        flex:4,
        // backgroundColor:'#fff'
    },

    header: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
        padding: 20,
        alignItems: 'center'
    },

    main: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'space-aroundc',
        alignItems: 'center',
        gap: 20,
        // padding: 20
    },

    titulo: {
        fontSize: 20,
        marginHorizontal: 10
    },

    informe:{
        fontSize: 14,
        // paddingLeft: 20
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
        fontSize: 14,
        alignItems: 'center'
    },

    icon:{
        width: '15%',
    
    },
// Fim do estilo input
    
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center' 
    },

    bntconfirmar: {
        backgroundColor:'#044D8C',
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center',
        width: 140,
        height: 50
    },
    
    confirmar: {
        color:'#fff'
    },

    bntCancelar: {
        backgroundColor:'#6D0909',
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center',
        width: 140,
        height: 50
    },
    
    cancelar: {
        color:'#fff'
    },
});

export default styles;