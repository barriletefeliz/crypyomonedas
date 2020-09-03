import React, { Fragment } from 'react';
import Form from './Components/Form'
import './App.css';


function App() {
  return (
    <Fragment>
      <div className="contenainer">
        <div className="img"></div>
      </div>
        
      <div>
        <div className="heading">Cotizador de Cryptos</div>
        <Form />
      </div>
    </Fragment>
  );
}

export default App;
