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
    borderColor:'#808080',
    borderBottomWidth:2,
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
    fontWeight:'bold',
    color: '#000',
    
  },

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
    fontWeight:'bold'
    
  },

  main: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  infoNomeContato: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#bbb',
    marginTop: 25,
    marginBottom: 20,
  },

  inputNome: {
    width:360,
    padding:5
  },

  infoContUni: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor:'#bbb',
    padding: 5,
    marginTop: 15,
    marginBottom: 20,
  },

  inputContato: {
    width:180,
    borderBottomWidth: 1,
    borderColor:'#bbb',
    padding:5
  },
  inputUnidade: {
    width:168,
    padding:5,
    borderBottomWidth: 1,
    borderColor:'#bbb'
  },

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