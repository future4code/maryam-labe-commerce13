import React from 'react';
import CarrinhoItem from './CarrinhoItem';

export default class Carrinho extends React.Component {

  exibirNoCarrinho = () => {
    const listaProdutos = this.props.produtos.map((produto) => {
      return (
        <CarrinhoItem
          quantidade={1}
          descricao={this.props.titulo}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.tituloSecao}</h3>
        {this.exibirNoCarrinho}
      </div>
    )
  }
}