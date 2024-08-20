import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    main: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    texto:{
        marginTop:20,
        marginBottom:25,
    },
    
    titulo:{
        fontSize: 20,
        //fontWeight:'bold',
        fontFamily: 'JejuGothic-Regular',
        marginBottom: 25
    },
    
    paragrafo:{
        fontSize: 16,
        fontFamily: 'JejuGothic-Regular',
        marginBottom: 25
    },

    // Inicio do estilo do inputs
    inputArea:{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 50,
        width: '90%',
        height: 50,
    },

    input:{
        alignItems: 'center',
        // backgroundColor:'#fff',
        color: '#000',
        fontSize: 14,
        fontFamily: 'JejuGothic-Regular',
        width: '85%',
        height: 50,
    },

    icon:{
        width: '15%',
    
    },
// Fim do estilo input
    
    cont_Button:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'90%' 
    },

    bntconfirmar:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#044D8C',
        borderRadius: 10,
        width: 140,
        height: 50
    },
    
    confirmar: {
        color:'#fff',
        fontFamily: 'JejuGothic-Regular'
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
        color:'#fff',
        fontFamily: 'JejuGothic-Regular'
    },
});

export default styles;