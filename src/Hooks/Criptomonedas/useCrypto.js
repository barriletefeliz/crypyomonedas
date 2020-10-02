
import React, { Fragment, useState } from 'react';
import './Styles.css'

const useCrypto = (label, initialState, options) => {

    //State del Hook
    const [state, updateState] = useState(initialState);

    const SelectCrypto = () => (
        <Fragment>                 
            <label className="label">{label}</label>    
            <div className="form-group">
                <select
                    className="custom-select"
                    onChange={ e => updateState(e.target.value)}
                    value={state}
                >
                    <option value="AR">--Seleccione--</option>
                    {options.map(option => (
                    <option key={option.CoinInfo.id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                    ))}
                </select>
            </div>
        </Fragment>
    );
 
    return [state, SelectCrypto, updateState ];    
}

export default useCrypto;