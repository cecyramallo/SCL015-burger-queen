import React,{Fragment, useState} from 'react';

const Listas = () => {

    const [numeros, setNumero] = useState([1,2,3,4,5,6])

    return (
        <Fragment>
            <ul>
                {
                    numeros.map((item, index) => 
                        <li key={index}>
                            {item} - {index}
                        </li>
                    )
                }
            </ul>
        </Fragment>
    );
}
 
export default Listas;