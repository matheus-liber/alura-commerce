import { Text, View, FlatList, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { Produto } from '../../componentes/Produto';
import { estilos } from './estilos';
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { useContext } from 'react';
import { TemaContext } from '../../contexts/TemaContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutosContext } from '../../contexts/ProdutosContext';


export default function Finalizar({navigation}) {

  const { temaEscolhido } = useContext(TemaContext)
  const estilo = estilos(temaEscolhido)

  const { usuario } = useContext(AutenticacaoContext)

  const { quantidade, carrinho, finalizaCompra } = useContext(ProdutosContext)

  async function botaoPressionado() {
    const resultado = await finalizaCompra()
    Alert.alert(resultado);
    navigation.navigate('Principal');
    
  }

  return (
    <View style={estilo.container}>
      <StatusBar />
      <View style={estilo.containerView}>
        <View style={estilo.containerInfo}>
          <Text style={estilo.titulo}>Informações de Entrega</Text>
          <Text style={estilo.lista}>Nome: {usuario.nome}</Text>
          <Text style={estilo.lista}>Endereço: {usuario.endereco}</Text>
          <Text style={estilo.lista}>Email: {usuario.email}</Text>
          <Text style={estilo.lista}>Telefone: {usuario.telefone}</Text>
        </View>
        <View style={estilo.containerResumo}>
          <Text style={estilo.lista}>Quantidade: {quantidade}</Text>
          <Text style={estilo.lista}>Preço Total: R$ {carrinho.reduce((total, produto) => total + produto.preco, 0)}</Text>
        </View>
      </View>
      <TouchableOpacity 
        style={estilo.botao} 
        onPress={() => botaoPressionado()}
      >
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

