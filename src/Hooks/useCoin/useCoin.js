
import React, { Fragment, useState } from 'react';
import './Styles.css'

const useCoin = (label, initialState, options) => {

    //State del Hook
    const [state, updateState] = useState(initialState);

    const SelectCoin = () => (
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
                    <option key={option.code} value={option.code}>{option.name}</option>

                ))}
            </select>
            </div>
        </Fragment>
    );
 
    return [state, SelectCoin, updateState ];    
}

export default useCoin;