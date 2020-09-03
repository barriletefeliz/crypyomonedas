import React, { useState, useEffect } from 'react';
import './Styles.css';
import useCoin from '../../Hooks/useCoin/useCoin';
import useCrypto from '../../Hooks/Criptomonedas/useCrypto';
import axios from 'axios';

const Form = () => {

    //State del listado de criptos
    const [cryptoList, saveCrypto] = useState([]);
    const [error, saveError] = useState(false);
    

    const COINS = [
        {code: 'USD' , name: 'Dolar Americano'},
        {code: 'EUR' , name: 'Euro'},
        {code: 'GBP' , name: 'Libra esterlina'},
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
        saveError(false)
    }

    return (
        <form
            onSubmit={quoteCurrency}
        >
            {error ? 'Hay un error' : null}
            <SelectCoin />
            <SelectCrypto />
            
            <button 
                className="btn"
                type="submit"
                value="calcular"
            />
        </form>
    );
}

export default Form;