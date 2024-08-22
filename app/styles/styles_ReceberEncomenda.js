import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
  
    header: {
      flexDirection: 'column',
      marginTop:25
    },

    icones: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        marginLeft: 10,
        gap: 5,
    },

    InfoTitulo: {
      flexDirection:'row',
      alignItems:'center',
      gap: 5,
      paddingLeft: 16,
    },

    infoEncomenda: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#000',
    },
  
    infoDia: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#848282',
    },

    titulo_button:{
      flexDirection:'row',
      justifyContent:'flex-end',
      marginRight: 10,
      gap:10,
    },

    bntReceber:{
      flexDirection: 'row',
      justifyContent:'center',
      gap:5,
      backgroundColor: '#579DD9',
      borderRadius: 4,
      alignItems: 'center',
      marginTop: 20,
      padding:10,
      width: 125,
      heght: 30
    },
  
    textReceber:{
      color: '#fff',
      fontSize: 16,
      fontWeight:'bold'
      
    },
  
  
    main: {
      flexDirection: 'column',
      justifyContent:'center',
      
    },
  // Inicio CardStatus
  container_status: {
    flexDirection:'column',
    // backgroundColor: 'gray',
    padding:5,
  },

  container_Status:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderLeftColor:'#579DD9',
    borderBottomColor:'#808080',
    borderLeftWidth:4,
    borderBottomWidth:2,
    // backgroundColor:'red',
  },

  info_contact_e_hours:{
    flexDirection:'column',
    // backgroundColor:'red',
    paddingVertical:5,
    paddingLeft:8,
    width:'100%',
  },

  title_hours:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  marginBottom:10
  },

  title:{
    fontSize:20,
    fontWeight:'bold'
  },

  hours:{
    fontSize:13,
    fontWeight:'bold'
  },

  description:{
    color:'#888888',
    fontSize:15,
    fontWeight:'bold'
  },

  bnt_novaEncomenda:{
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'red'
  },

  id_status_finalizar:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'gray',
    width:'100%'
  },

  id_e_status:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'yellow',
    gap:10,
    marginTop:15,
    widht:'60%',
    height: 40
  },

  checkoutEncomenda:{
    flexDirection:'row',
    marginTop:15,
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:'orange',
    widht: '40%',
    height:40
    
  },

  id:{
    color:'#888888',
    borderColor:'#888888',
    borderRadius: 4,
    borderWidth:3,
    fontSize:10,
    fontWeight:'bold',
    paddingVertical:4,
    paddingHorizontal:15
  },
  status:{
    // color:'#6D0909',
    // borderColor:'#6D0909',
    backgroundColor:'#6D0909',
    borderRadius: 4,
    // borderWidth:3,
    // fontSize:10,
    // fontWeight:'bold',
    // paddingVertical:4,
    // paddingHorizontal:4
    width:15,
    height:15
  },

  bnt_finalizar:{
    color:'#6D0909',
    borderColor:'#6D0909',
    borderRadius: 4,
    borderWidth:3,
    fontSize:10,
    fontWeight:'bold',
    paddingVertical:10,
    paddingHorizontal:35
  },
  // Fim CardStatus

    footer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#579DD9',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 1,
      paddingBottom: 1,
      height: 50
    },
  
    suporte: {
      color: '#fff',
      fontSize: 15,
    }

  });

export default styles;