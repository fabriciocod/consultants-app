import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#dcdcdc',
    // padding: 8,
  },

  main:{
    flexDirection: 'column',
    // backgroundColor:'#dcf',
    marginLeft: 5,
    marginRight:5
  },

  texto:{
    marginBottom:25
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

  cont_codigo:{
    marginLeft: 5,
    width:'90%'
  },

  cont_AlterarSenhas:{
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
    gap: 10,
    
    
  },

  // Inicio do estilo do inputs
    inputArea:{
      flexDirection: 'row',
      justifyContent:'flex-end',
      alignItems: 'center',
      borderRadius: 4,
      borderBottomWidth: 1,
      marginBottom: 25,
      width: '45%',
      height: 50,
            
    },
  
    input:{
      color: '#000',
      fontSize: 14,
      padding: 8,
      width: '65%',
      height: 50,
    },
  
    icon:{
     width: 30,
      height: 25,
    },
  // Fim do estilo input

  // Definição Botão confirmar
  cont_Confirmar:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  
  bntConfirmar:{
    backgroundColor:'#044D8C',
    borderRadius: 8,
    justifyContent:'center',
    width: 150,
    height: 50
  },

  textConfirmar:{
    color:'#fff',
    fontSize: 18,
    fontWeight:'bold',
    textAlign:'center'

  }
});


export default styles;