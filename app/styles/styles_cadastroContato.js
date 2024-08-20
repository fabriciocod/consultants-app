import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    
  },

  header: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 16,
    marginRight:16,
  },

  cadContato:{
    flexDirection:'row',
    alignItems:'center',
    marginTop: 25,
    marginBottom: 20
  },

  contato: {
    fontSize: 25,
    fontFamily:'JejuGothic-Regular',
    color: '#000',
  },
// Inicio dos Botões
  bntAddContato: {
    flexDirection: 'row',
    justifyContent:'flex-end',
    gap:10,
    marginRight:5,
    marginBottom:16
  },

  bntContato: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#579DD9',
    borderRadius: 4,
    gap:5,
    paddingVertical: 10,
    paddingHorizontal: 25,
},

  bntEncaminhar:{
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#6D0909',
    borderRadius: 4,
    gap:5,
    padding: 10
  },

  textContato: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'JejuGothic-Regular'
    
  },
// Fim dos Botões

  main: {
    flexDirection: 'column',
    alignItems: 'center',
  },

// Inicio dos Input
  infoNomeContato: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#bbb',
    width:340,
    marginTop: 25,
    marginBottom: 20,
  },

  inputNome: {
    width:300,
    fontFamily: 'JejuGothic-Regular',
  },

  infoContUni: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor:'#bbb',
    marginTop: 15,
    marginBottom: 20,
    width:350,
  },

  inputContato: {
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    borderBottomWidth: 1,
    borderColor:'#bbb',
    fontSize: 14,
    fontFamily: 'JejuGothic-Regular',
    width:150,
    height:45
  },

  inputUnidade: {
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    borderColor:'#bbb',
    borderBottomWidth: 1,
    fontSize:14,
    fontFamily:'jejuGothic-Regular',
    width:120,
    height:45
  },
// Fim dos Input

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#579DD9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    maxHeight: 50,
  },
});

  export default styles;