import React from 'react';
import CardProduto from './CardProduto';
import FiltroDePreco from './FiltroDePreco';

class CompraDeProdutos extends React.Component {

    
    state = {
        produtos: [
            {
            id: 1,
            titulo: 'Viagem para Vênus',
            preco: 900000,
            data: '07/01/2121',
            foto: 'https://picsum.photos/170/120?random=1'
            },
            {
            id: 2,
            titulo: 'Viagem para Marte',
            preco: 1100000,
            data: '21/02/2121',
            foto: 'https://picsum.photos/170/120?random=2'
            },
            {
            id: 3,
            titulo: 'Viagem Júpiter',
            preco: 1000000,
            data: '06/03/2121',
            foto: 'https://picsum.photos/170/120?random=3'
            },
            {
            id: 4,
            titulo: 'Excursão Plêiades',
            preco: 1300000,
            data: '25/04/2121',
            foto: 'https://picsum.photos/170/120?random=4'
            },
            {
            id: 5,
            titulo: 'Excursão Andrômeda',
            preco: 4000000,
            data: '30/05/2121',
            foto: 'https://picsum.photos/170/120?random=5'
            },
            {
            id: 6,
            titulo: 'Viagem + Show da Lady Gaga no planeta Chromatica',
            preco: 1000000,
            data: '17/06/2121',
            foto: 'https://picsum.photos/170/120?random=6'
            },
            {
            id: 7,
            titulo: 'Viagem para Lua',
            preco: 200000,
            data: '17/07/2121',
            foto: 'https://picsum.photos/170/120?random=7'
            },
            {
            id: 8,
            titulo: 'Viagem para Aldebaran',
            preco: 1200000,
            data: '06/08/2121',
            foto: 'https://picsum.photos/170/120?random=8'
            },
        ],
        
        precoMaximo:9999999,
        precoMinimo: 0 ,
        buscaNome:"" ,
        precoTotal: 0,
        carrinho: []
    }


    onChagePrecoMax = (event) => {
        this.setState({ precoMaximo: event.target.value });
    };

    onChagePrecoMin = (event) => {
        this.setState({ precoMinimo: event.target.value });
    };

    onChageNome = (event) => {
        this.setState({ buscaNome: event.target.value });
        
    };
    adicionarAoCarrinho = (produt) => {
        alert("Comprou uma "+produt.titulo)
        
        const itemCarrinho = this.state.produtos.find(produto => produto.id === produt.id);
        const valorProduto=produt.preco;
        let total=this.state.precoTotal+valorProduto;
        const novoArray = [...this.state.carrinho, itemCarrinho];
        this.setState({ carrinho: novoArray })
        this.setState({precoTotal:total})
        console.log(this.state.precoTotal)
    }
    removerDoCarrinho = (indexremover) => {
        

        const copiacarrinho = this.state.carrinho.filter((produt, index) => {
            if (index ===indexremover){
                const valorProduto=produt.preco
                let total =this.state.precoTotal-valorProduto
                this.setState({precoTotal:total})
                return false;
            }
            else
            {
                return true;
            }

            
        })
        this.setState({carrinho:copiacarrinho})
    }

    render(){

            const FiltroCards = this.state.produtos.filter ((produto) => produto.titulo.toLowerCase().includes(this.state.buscaNome.toLowerCase()));

            
            const CardsProdutos = FiltroCards.map((produto) => {
                

                if (produto.preco>=this.state.precoMinimo && produto.preco<=this.state.precoMaximo)
                {
                    return (<div key={produto.id}>
                        <div className = "item">
                            <h3 className="tituloItem">{produto.titulo}</h3>
                            <img className="imagemItem" src={produto.foto}></img>
                            <p className="dataItem">{produto.data}</p>
                            <p className="precoItem">$ {produto.preco}</p>
                        </div>
                        <div id = "botaoComprar">
                            <button onClick={() => this.adicionarAoCarrinho(produto)}>Adcionar do carrinho</button>
                        </div>
                    </div>
                    );
                }
                else
                {
                return;
                }
        });

        const CardsCarrinho = this.state.carrinho.map((produto, index) => {
            return (<div key={index}>
                <div className="itemCarrinho">
                    <p>{produto.titulo}</p>
                </div>
                <div className="botaoRemover">
                    <button onClick={() => this.removerDoCarrinho(index)}>Remover</button>
                </div>

            </div>)
        });
        return (
            <div>
                <div className="filtroDeProdutos">

                    
                    <div class = "filtroPrecoMix">

                        <input 
                        type="number" 
                        name ="precomax"
                        value={this.state.precoMinimo}   
                        onChange={this.onChagePrecoMin}                     
                        ></input>

                        <label>valor mínimo</label>
                    </div>
                    <div class = "filtroPrecoMax">

                        <input 
                        type="number"
                        name ="precomax"
                        value={this.state.precoMaximo}   
                        onChange={this.onChagePrecoMax}
                        ></input>

                        <label>valor máximo</label>
                    </div>
                    <div class = "filtroNome">

                        <input 
                        type="text"
                        name ="buscaNome"
                        value={this.state.buscaNome}   
                        onChange={this.onChageNome}
                        ></input>

                        <label>valor máximo</label>
                    </div>
                </div>
                <div className="produtos">
                    <div>{CardsProdutos}</div>
                </div>

                <div className="transicao">
                <h2>Carrinho de Compras</h2>
                </div>


                <div className="carrinho">
                    <div>{CardsCarrinho}</div>
                    <div>
                        <p>valor total = $ {this.state.precoTotal}</p>
                    </div>
                    <div>
                        <button>Boleto</button>
                        <button>Cartão</button>
                    </div>
                </div>
            </div>
        );
    
    }
}
export default CompraDeProdutos