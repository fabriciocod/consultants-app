import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      // justifyContent: 'space-around',
    },
  
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    main: {
      flexDirection: 'column',
      justifyContent:'flex-start',
      alignItems: 'center',
       // marginTop: 50,
      // marginBottom: 50
    },
  
  // Inicio do estilo do inputs
    inputArea:{
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 5,
      borderColor: '#000',
      borderBottomWidth: 1,
      marginTop: 30,
      width: '90%',
      height: 50,
    },
  
    input:{
      width: '85%',
      height: 50,
      color: '#000',
      padding: 8,
      fontSize: 14,
      
    },
  
    icon:{
      width: '15%',
    },
  // Fim do estilo input
  
    button: {
      flexDirection: 'colunm',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
  
    bntEntrar: {
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#044D8C',
      borderRadius:8,
      marginBottom:25,
      width: 300,
      height: 50
    },
  
    entrar: {
      color:'#fff',
      fontSize: 17,
      fontFamily: 'JejuGothic-Regular',
    },
  
  
  
  footer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#044D8C',
    paddingLeft: 10,
    paddingRight: 10,
    
  
  },
  
  texto: {
    color:'#fff',
    fontSize: 15,
    fontFamily: 'JejuGothic-Regular',
  }
  
  });

  export default styles;