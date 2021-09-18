import React from 'react';

export default class Carrinho extends React.Component {
  // state = {
  //   carrinho: [
  //     {
  //       id: 7,
  //       titulo: 'Viagem para Lua',
  //       preco: 200000,
  //       data: '17/07/2121',
  //       foto: '',
  //       quantidade: 1
  //     },
  //     {
  //       id: 8,
  //       titulo: 'Viagem para Aldebaran',
  //       preco: 1200000,
  //       data: '06/08/2121',
  //       foto: '',
  //       quantidade: 1
  //     },
  //   ]
  // }

  // exibirNoCarrinho = () => {
  //   console.log("carrinho", this.state.carrinho)
  //   const listaProdutos = this.state.carrinho.map((produto) => {
  //     return (

  //       <div>
  //         <p>{produto.quantidade} x {produto.titulo}</p>
  //         <button>+</button>
  //         <button>-</button>
  //         <button>Remover</button>
  //       </div>
  //     )
  //   })
  //   return listaProdutos;
  // }


  exibirNoCarrinho = () => {
    console.log("carrinho", this.props.carrinho)
    const listaProdutos = this.props.carrinho.map((produto) => {
      return (
        <div>
          <p>{produto.quantidade} x {produto.titulo}</p>
          <button>+</button>
          <button>-</button>
          <button>Remover</button>
        </div>
      )
    })
    return listaProdutos;
  }

  render() {
    return (
      <div>
        <h3>Carrinho de compras</h3>
        {this.exibirNoCarrinho()}
      </div>
    )
  }
}