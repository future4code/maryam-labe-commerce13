import React from 'react';
import './App.css';
import Carrinho from './components/Carrinho/Carrinho';
import CompraDeProdutos from './components/CompraDeProdutos/CompraDeProdutos';
import Header from './components/Header/Header';
import QuemSomos from './components/Header/QuemSomos';
import Produtos from './components/Produtos/Produtos';


class App extends React.Component {

  adicionarAoCarrinho = (id) => {
    const itemCarrinho = this.state.produtos.find(produto => produto.id === id)

    const novoArray = [...this.state.carrinho, itemCarrinho];
    this.setState({ carrinho: novoArray });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <QuemSomos />
        {/* <CompraDeProdutos produtos={this.state.produtos} /> */}
        {/* <Carrinho carrinho={this.state.carrinho} /> */}
        <Produtos />
      </div>
    );
  }
}

export default App;
