import React, { Fragment, useState, useEffect } from 'react';
import Title from './Components/Title'
import Header from './Components/Header'
import Form from './Components/Form'
import Spinner from './Components/Spinner';
import Quotation from './Components/Quotation'
import axios from 'axios';
import './App.scss';


function App() {

  const [coin, saveCoin] = useState('');
  const [criptomoneda, saveCriptomoneda] = useState('');
  const [result, saveResult] = useState({});
  const [loading, saveLoading] = useState(false);

  useEffect(()=>{
    const quote = async () => {
      
      //evita ejecució la 1ra vez
      if(coin === '') return;

      //obtención de la cotización con la api
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${coin}`;
      const result = await axios.get(url);

      //muestra spinner
      saveLoading(true);
      
      //oculta spinner y muestra resultado
      setTimeout(()=>{
        //cambia estado de loading
        saveLoading(false);
        //guarda cotización
        saveResult(result.data.DISPLAY[criptomoneda][coin]);
      }, 4000);
    }
    quote();
  }, [coin, criptomoneda]);

  //spinner condicional
  const component = (loading) ? <Spinner /> : <Quotation result={result}/>;

  return (
    <Fragment>
      <Title />
      <div className="container">
        <div className="app">
          <Header/>
          <div>
            <Form 
              saveCoin={saveCoin}
              saveCriptomoneda={saveCriptomoneda}
            />
            </div>
        </div>
            {component}
      </div>
    </Fragment>
  );
}

export default App;
