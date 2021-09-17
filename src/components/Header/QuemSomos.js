import React from "react";
import styled from "styled-components";



const StyledQuemSomos = styled.div`
margin-left: 2vw;
font-family:  "Roboto Thin";
text-align: left;
font-size: 45px;
color: black;
width: 30%;
`
const StyledPacotes = styled.div `
background-color: black;
color: white;
height: 10vh;
width: auto;

`
export default function QuemSomos() {
    return(
    <div>
        <StyledQuemSomos>
            <p>somos a primeira agência de viagens
                intergalácticas especializada na exploração
                do Universo!
            </p>
        </StyledQuemSomos>
        <StyledPacotes>
            <h1>conheça nossos pacotes!</h1>
        </StyledPacotes>
    </div>

    )
}