import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      // backgroundColor: '#ecf0f1',
      // padding: 8,
    },
    header:{
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center',
    },
    bntLimpar:{
      flexDirection:'row',
      alignItems:'center',
      marginRight:15
    },
  
    limpar:{
      color:'#888888',
      fontSize:15,
      fontWeight:'bold',
      
    },
    
    main:{
      flexDirection:'column',
      justifyContent:'space-around',
      // backgroundColor:'orange',
      padding:8
    },
  
    container_assinatura:{
      flexDirection:'column',
      justifyContent:'center'
    },
  
    // Inicio Rotulo Descrição
    rotulo_assinatura:{
      alignItems:'center',
      borderTopWidth:1,
      borderColor:'#888888',
    },
  
    assinatura:{
      color:'#888888',
      fontSize:10,
      fontWeight:'bold',
      marginTop:10
    },
  
    // Fim rotulo Descrição
  
    footer:{
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center',
      backgroundColor:'#044D8C',
      paddingRight:10
    },
  
    bntSalvar:{
      color:'#fff',
      fontSize:15,
      fontWeight:'bold'
    },
    
  });

  export default styles;