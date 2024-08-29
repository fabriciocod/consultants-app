import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    },

    header:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    },

    titulo:{
    color:'#0C3854',
    fontSize:20,
    fontWeight:'bold',
    
    },
    
    main:{
    flexDirection:'column',
    padding:8
    },

    contato:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:35
    },

    container_entrega:{
    backgroundColor:'#fff'
    },

    // Inicio rotulo Contato e Data
    rotulo_contato_data_hora:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:5
    },

    numero_contato:{
    color:'#888888',
    fontSize:10,
    fontWeight:'bold'
    },

    data_hora:{
    color:'#888888',
    fontSize:10,
    fontWeight:'bold',
    paddingRight:60
    },
    // Fim rotulo Contato e Data

    // Inicco Info Contato e Data
    info_contato_data_hora:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:5
    },

    numero:{
    color:'#888888',
    fontSize:13,
    fontWeight:'bold',
    },

    hora_data:{
    color:'#888888',
    fontSize:13,
    fontWeight:'bold',
    paddingRight:13
    },
    // fim info Contato e Data

    // Inicio rotulo Prioridade e Tipo
    rotulo_prioridade_tipo:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:5
    },

    prioridade:{
    color:'#888888',
    fontSize:10,
    fontWeight:'bold',
    },

    tipo:{
    color:'#888888',
    fontSize:10,
    fontWeight:'bold',
    paddingRight:90
    },

    info_prioridade_tipo:{
    flexDirection:'row',
    justifyContent:'space-between'
    },

    classe_prioridade:{
    color:'#888888',
    fontSize:13,
    fontWeight:'bold',
    },

    classe_tipo:{
    color:'#888888',
    fontSize:13,
    fontWeight:'bold',
    paddingRight:40
    },
    // Fim rotulo de Prioridade e Tipo

    // Inicio Rotulo Descrição
    rotulo_descricao:{
    borderWidth:1,
    borderRadius:4,
    borderColor:'#888888',
    height:80,
    marginTop:10,
    marginBottom:25,
    padding:10
    },

    descricao:{
    color:'#888888',
    fontSize:10,
    fontWeight:'bold',
    },

    classe_descricao:{
    color:'#888888',
    fontSize:13,
    fontWeight:'bold',
    },
    // Fim rotulo Descrição

    // Inicio do container Status
    container_status:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    gap: 20,
    backgroundColor:'#fff'
    },

    idContato:{
    color:'#888888',
    borderColor:'#888888',
    borderWidth:3,
    borderRadius:5,
    fontSize:13,
    fontWeight:'bold',
    paddingVertical:5,
    paddingHorizontal:20
    },

    statusEntrega:{
    color:'#157306',
    borderColor:'#157306',
    borderWidth:3,
    borderRadius:5,
    fontSize:13,
    fontWeight:'bold',
    paddingVertical:5,
    paddingHorizontal:20
    },
    // Fim do container stastus

    // Inicio do bntEntregar
    container_bntEntregar:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:50
    },

    bntEntregar:{
    color:'#044D8C',
    borderColor:'#044D8C',
    borderWidth:3,
    borderRadius:5,
    fontSize:16,
    fontWeight:'bold',
    paddingVertical:5,
    paddingHorizontal:33
    },
    // Fim do bntEntregar
    footer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:'#044D8C'
    },
    
});

export default styles;