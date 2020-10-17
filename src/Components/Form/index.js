import React, { useState, useEffect } from 'react';
import useCoin from '../../Hooks/useCoin/useCoin';
import useCrypto from '../../Hooks/Criptomonedas/useCrypto';
import Error from '../Error'
import axios from 'axios';
import './Style.scss';

const Form = ({saveCoin, saveCriptomoneda}) => {

    //State del listado de criptos
    const [cryptoList, saveCrypto] = useState([]);
    const [error, saveError] = useState(false);
    

    const COINS = [
        {code: 'USD' , name: 'Dolar Americano'},
        {code: 'EUR' , name: 'Euro'},
        {code: 'ARG' , name: 'Peso Argentino'}

    ]
    //utiliza moneda
    const [moneda, SelectCoin ] = useCoin('Elige tu moneda', '', COINS);

    //utiliza crypto
    const [crypto, SelectCrypto] = useCrypto('Elige tu criptomoneda', '', cryptoList);  


    //llamando a la API
    useEffect(()=>{
        const consultApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await axios.get(url);
            saveCrypto(result.data.Data);
        }
        consultApi();

    }, []);

    //submit del usuario
    const quoteCurrency = e => {
        e.preventDefault();

        //validación de campos
        if(moneda === '' || crypto === ''){
            saveError(true);
            return          
        } 
        //paso de datos a componente principal
        saveError(false);
        saveCoin(moneda);
        saveCriptomoneda(crypto)
    }

    return (
        <form
            onSubmit={quoteCurrency}
        >
            {error ? <Error message="Todos los campos son obligatorios"/> : null}
            <SelectCoin />
            <SelectCrypto />

            <button 
                className="btn btn-info alert btn-lg btn-block"
                type="submit"
                value="calcular"
            >Convertir</button>
        </form>
    );
}

export default Form;