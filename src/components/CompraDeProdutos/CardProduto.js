import React from "react";

export default function CardProduto(props){

        return(
            <div class = "card">
                <div class = "item">
                    <h2 class="tituloItem">{props.tituloItem}</h2>
                    <img class="imagemItem" src={props.img}></img>
                    <p class="dataItem">{props.dataItem}</p>
                    <p class="precoItem">$ {props.precoItem}</p>
                </div>
                <div id = "comprar">
                    <button>Adcionar do carrinho</button>
                </div>
            </div>
        );
    
}

