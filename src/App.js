import React from 'react';
import logo from './logo.svg';
import './App.css';

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
    ]
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
