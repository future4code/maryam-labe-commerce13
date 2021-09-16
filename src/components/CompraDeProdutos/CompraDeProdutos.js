import React from 'react';
import CardProduto from './CardProduto';
import FiltroDePreco from './FiltroDePreco';

class CompraDeProdutos extends React.Component {

    exibirCardsProdutos = () => {
        const painelCardsProdutos = this.props.produtos.map((item) => {
            return (
                <CardProduto tituloItem={props.item.titulo} />
            )
        })
    }

    render() {
        return (
            <div>
                <div class="filtroDeProdutos">
                    <FiltroDePreco />
                </div>
                <div class="produtos">
                    {exibirCardsProdutos}
                </div>
            </div>
        );
    }
}

export default CompraDeProdutos;





