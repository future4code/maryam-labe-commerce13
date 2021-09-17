import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carrinho from './components/Carrinho/Carrinho';
// import CompraDeProdutos from './components/CompraDeProdutos/CompraDeProdutos';
import Header from './components/Header/Header';
import QuemSomos from './components/Header/QuemSomos';

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        titulo: 'Viagem para Vênus',
        preco: 900000
      },
      {
        id: 2,
        titulo: 'Viagem para Marte',
        preco: 1100000
      },
      {
        id: 3,
        titulo: 'Viagem Júpiter',
        preco: 1000000
      },
      {
        id: 4,
        titulo: 'Excursão Plêiades',
        preco: 1300000
      },
      {
        id: 5,
        titulo: 'Excursão Andrômeda',
        preco: 4000000
      },
      {
        id: 6,
        titulo: 'Viagem + show da Lady Gaga no planeta Chromatica',
        preco: 1000000
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
        <Header/>
        <QuemSomos/>
        <CompraDeProdutos produtos={this.state.produtos} />
        <Carrinho produtosAdicionados={this.state.carrinho} />
      </div>
    );
  }
}

export default App;
