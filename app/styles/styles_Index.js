import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      // justifyContent: 'space-around',
    },
  
    imageBackground: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width: '100%'
    },
  
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 20,
      alignItems: 'center',
      // backgroundColor:'blue'   
    },
    
    main: {
      flexDirection: 'column',
      // justifyContent:'space-between',
      // gap: 5,
      alignItems: 'center',
      // backgroundColor: '#dcf',
      marginTop: 50,
      marginBottom: 50
              
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
      backgroundColor:'#044D8C',
      borderRadius: 8,
      justifyContent:'center',
      alignItems:'center',
      marginBottom:25,
      width: 300,
      height: 50
    },
  
    entrar: {
      color:'#fff',
      fontSize: 17,
      fontWeight:'bold'
    },
  
  
  
  footer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#044D8C',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 1,
    paddingBottom: 1,
    maxHeight: 50
  
  },
  
  texto: {
    color:'white',
    fontSize: 15,
    fontWeight:'bold'
  }
  
  });

  export default styles;