import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      
      
    },
  
    //Inicio do header
    header:{
      flexDirection:'column',
      justifyContent:'center',
      backgroundColor:'#fff'
    },
  
    titulo:{
      // color:'#fff',
      fontSize:25,
      fontWeight:'bold',
      marginLeft:16,
      marginBottom:10
    },
  
    info_contato:{
      color:'#808080',
      fontSize:15,
      fontWeight:'bold',
      marginLeft:16,
      
    },
    //Fim do header
  
    //Inicio do Main
    main:{
      flexDirection:'column',
      justifyContent:'flex-start',
      
    },
    
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
  
    prioridade_container:{
      flexDirection:'column',
      marginBottom:20,
      backgroundColor:'#'
  
    },
  
  text_topico:{
    fontSize:18,
    fontWeight:'bold',
    marginLeft:16,
    marginBottom:15
  },
  
    tipo_prioridade:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      marginLeft:16,
      marginRight:16
    },
  
    tipo:{
      borderRadius:8,
      borderColor:'#000',
      borderBottomWidth:1,
      marginTop:15,
      marginLeft:16,
      marginRight:16,
      paddingLeft:10,
      height:50
    },
  
    desc_Container:{
      justifyContent: 'center',
      padding: 16,
    },
  
    descricao:{
      height: 100,
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
      textAlignVertical: 'top', // Isso faz com que o texto comece no topo
    },
  
    footer:{
      flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: '#044d8c',
        paddingHorizontal: 20,
        paddingVertical: 10,
        maxHeight:50
    },
  
    bnt_Salvar:{
      color: '#fff',
      fontSize: 16,
      fontWeight:'bold'
    }
  
  });

  export default styles;