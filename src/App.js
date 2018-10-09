import React from 'react';
import AppStyle from './AppStyle';

class App extends React.Component {
  render() {
    return (
      <div style={AppStyle.divDeFora}>
        <h1 style={AppStyle.titulo}>Temporizador React</h1>
          <div style={AppStyle.divButao}>
            <button style={AppStyle.butao1}>+</button>
            <button style={AppStyle.butao2}>-</button>
            </div>
          <div style={AppStyle.divTemp}>00:00</div>
          <div style={AppStyle.divButton}>
            <button style={AppStyle.button}>Iniciar/Parar</button>
            <button style={AppStyle.button}>Zerar</button>
            <button style={AppStyle.button}>Registrar</button>
          </div>
        
      </div>
    );
  }
}

export default App;
