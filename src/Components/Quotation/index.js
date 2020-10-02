import React from 'react';
import './Styles.css'

const Quotation = ({result}) => {
    if(Object.keys(result).length === 0) return null;

    console.log(result)
    return (
        <div className="container-crypto">
            <p className="price table-danger ">El precio es: <span >{result.PRICE}</span></p>
            
            <table className="table table-hover">
                <tbody>
                    <tr className="table-active">
                        <th scope="row">Precio más alto del día: </th>
                        <td></td>
                        <td>{result.PRICE}</td>
                        <td></td>
                    </tr>

                    <tr>
                        <th scope="row">Precio más bajo del día: </th>
                        <td></td>
                        <td>{result.LOWDAY}</td>
                        <td></td>
                    </tr>

                    <tr className="table-active">
                        <th scope="row">Variación en las últimas 24 hs: </th>
                        <td></td>
                        <td>{result.CHANGEPCT24HOURS}</td>
                        <td></td>
                    </tr>

                    <tr>
                        <th scope="row">Última actualización: </th>
                        <td></td>
                        <td>{result.LASTUPDATE}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table> 
        </div>
    );
}

export default Quotation