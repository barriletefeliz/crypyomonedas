
import React, { Fragment, useState } from 'react';
import './Styles.css'

const useCrypto = (label, initialState, options) => {

    //State del Hook
    const [state, updateState] = useState(initialState);

    const SelectCrypto = () => (
        <Fragment>
            <label className="label">{label}</label>
            <select
                className="select"
                onChange={ e => updateState(e.target.value)}
                value={state}
            >
                <option value="AR">--Seleccione--</option>
                {options.map(option => (
                    <option key={option.CoinInfo.id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>

                ))}
            </select>
        </Fragment>
    );
 
    return [state, SelectCrypto, updateState ];    
}

export default useCrypto;