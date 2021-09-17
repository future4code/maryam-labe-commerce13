import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color:black;
  width: 100vw;
  height: 20vh;
`;

const StyledLogo = styled.img`
  width: 10vw;
  height: 10vh;
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-left: 2vw;
`;

const StyledBarra = styled.nav`
  background-color: rgba(177, 76, 109, 0.5);
  font-family: "Roboto Light";
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100vw;
  height: 6vh;
`;
const StyledInputHeader = styled.div`
display: block;
margin-top: 5vh;
`
const StyledLogin = styled.div`
display:block;
margin-top: 5vh;
`
const StyledCarrinho = styled.div`
display:block;
margin-top: 5vh;
margin-right: 5vw;
`

export default function Header() {
  return (
    <div>
      <StyledHeader>
        <StyledLogo src="/img/logo.png" alt="" />
        <StyledInputHeader>
          <input type="text" placeholder="Qual planeta você quer conhecer?" />
        </StyledInputHeader>
        <StyledLogin>
          <button>LOGIN</button>
        </StyledLogin>
        <StyledCarrinho>
            <button>CARRINHO</button>
        </StyledCarrinho>
      </StyledHeader>
      <StyledBarra>
        <a href="#quem somos">QUEM SOMOS</a>
        <a href="#nossos pacores">NOSSOS PACOTES</a>
        <a href="#carriho de compras">CARRINHO DE COMPRAS</a>
      </StyledBarra>
    </div>
  );
}
