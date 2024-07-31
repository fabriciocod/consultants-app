import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },

    main: {
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor:'#dcf',
    },

    texto:{
        marginBottom:25,
        // backgroundColor: 'blue'
        
      },
    
      titulo:{
        fontSize: 24,
        fontWeight:'bold',
        marginBottom: 25
      },
    
      paragrafo:{
        fontSize: 16,
        // fontWeight:'bold',
        marginBottom: 25
      },

    // Inicio do estilo do inputs
    inputArea:{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 50,
        width: '90%',
        height: 50,
        // backgroundColor:'yellow'
        
    },

    input:{
        width: '85%',
        height: 50,
        color: '#000',
        // padding: 8,
        fontSize: 14,
        alignItems: 'center'
    },

    icon:{
        width: '15%',
    
    },
// Fim do estilo input
    
    cont_Button:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'#fff' 
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