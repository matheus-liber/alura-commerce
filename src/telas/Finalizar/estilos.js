import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const estilos = (tema) => { 
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: tema.fundo,
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    containerView: {
      flex: 1,
    },
    containerInfo: {
      backgroundColor: '#093245',
      margin: 10,
      padding: 10,
      borderRadius: 10,
    },
    containerResumo: {
      padding: 10,
    },
    titulo: {
      fontSize: 25,
      fontWeight: 'bold',
      color: tema.titulo,
      paddingVertical: 8
    },
    lista: {
      fontSize: 18,
      color: tema.titulo,
      paddingVertical: 5
    },
    botao: {
      margin: 16,
      marginBottom: 32,
      paddingVertical: 16,
      borderRadius: 10,
      backgroundColor: tema.botao,
    },
    botaoTexto: {
      fontSize: 18,
      fontWeight: 'bold',
      color: tema.preto,
      textAlign: 'center'
    }
  });
}