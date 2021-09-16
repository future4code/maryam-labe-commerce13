import React from 'react';
import './App.css';
import Carrinho from './components/Carrinho/Carrinho';
import CompraDeProdutos from './components/CompraDeProdutos/CompraDeProdutos';

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        titulo: 'Viagem para Vênus',
        preco: 900000,
        data: '07/01/2121',
        foto: ''
      },
      {
        id: 2,
        titulo: 'Viagem para Marte',
        preco: 1100000,
        data: '21/02/2121',
        foto: ''
      },
      {
        id: 3,
        titulo: 'Viagem Júpiter',
        preco: 1000000,
        data: '06/03/2121',
        foto: ''
      },
      {
        id: 4,
        titulo: 'Excursão Plêiades',
        preco: 1300000,
        data: '25/04/2121',
        foto: ''
      },
      {
        id: 5,
        titulo: 'Excursão Andrômeda',
        preco: 4000000,
        data: '30/05/2121',
        foto: ''
      },
      {
        id: 6,
        titulo: 'Viagem + Show da Lady Gaga no planeta Chromatica',
        preco: 1000000,
        data: '17/06/2121',
        foto: ''
      },
      {
        id: 7,
        titulo: 'Viagem para Lua',
        preco: 200000,
        data: '17/07/2121',
        foto: ''
      },
      {
        id: 8,
        titulo: 'Viagem para Aldebaran',
        preco: 1200000,
        data: '06/08/2121',
        foto: ''
      },
    ],
    carrinho: []
  }

  adicionarAoCarrinho = (id) => {
    const itemCarrinho = this.state.produtos.find(produto => produto.id === id)

    const novoArray = [...this.state.carrinho, itemCarrinho];
    this.setState({ carrinho: novoArray });
  }

  render() {
    return (
      <div className="App">
        <CompraDeProdutos produtos={this.state.produtos} />
        <Carrinho produtosAdicionados={this.state.carrinho} />
      </div>
    );
  }
}

export default App;
