import { StyleSheet } from "react-native";

// ajustar esses erros nos estilos

container: ({
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
  },

  InfoTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },

  infoCadastrar: {
    fontSize: 19,
    color: '#000',
  },

  bntAdicioCancelar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },

  bntAdicionar: {
    backgroundColor: '#579DD9',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 16,
    width: 120,
  },

  bntCancelar: {
    backgroundColor: '#6D0909',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 16,
    width: 120,
  },

  textContato: {
    color: '#fff',
    fontSize: 16,
  },

  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
    paddingBottom: 5,
  },

  input: {
    flex: 1,
    color: '#000',
    fontSize: 16,
    paddingVertical: 10,
  },

  icon: {
    marginLeft: 10,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#579DD9',
    padding: 10,
    height: 50,
  },
});


export default styles;