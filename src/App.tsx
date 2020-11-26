import React from 'react';
import Cabecalho from "./componentes/cabecalho";

import "./style.css";
// import ListaMinions from './componentes/listaMinions/listaMinions';

function App() {
  return (
    <div id="home">
      <div className="App">
        <Cabecalho />
        {/* <ListaMinions />  */} 
      </div>
    </div>
    
  );
}

export default App;
