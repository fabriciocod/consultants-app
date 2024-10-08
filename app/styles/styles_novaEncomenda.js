import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
    },
  
    //Inicio do header
    header:{
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
  
    text_Titulo: {
      fontSize: 25,
      fontFamily: 'JejuGothic-Regular',
    },
  
    text_Nome: {
      color: '#808080',
      fontSize: 15,
      fontFamily: 'JejuGothic-Regular',
    },
    //Fim do header
  
    //Inicio do Main
        
    data_hora_container:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginBottom:25,
      height:50
    },
  
    data:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginLeft:16
    },
  
    horas:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginRight:16
    },
  
  prioridade:{
    marginTop:25,
  },

  tipo_Prioridade: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    marginTop:10
  },
  
  text_Prioridade:{
    fontSize:16,
    fontFamily: 'JejuGothic-Regular',
    marginLeft: 16
  },
  
  encomenda:{
    marginTop:25
  },
  
  tipo_Encomenda:{
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    marginTop:10
  },

  text_Encomenda:{
    fontSize:16,
    fontFamily: 'JejuGothic-Regular',
    marginLeft: 16
  },
  
  cont_descricao: {
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 2,
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 30,
    height: 100,
    // textAlignVertical: 'top',
  },

  descricao:{
    fontSize: 15,
    fontFamily: 'JejuGothic-Regular',
  },
// Fim do main

// Inicio do footer
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#579DD9',
    paddingLeft: 10,
    paddingRight: 10,
  },
  
  text_Salvar: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'JejuGothic-Regular',
  },
// Fim do footer
  });

  export default styles;