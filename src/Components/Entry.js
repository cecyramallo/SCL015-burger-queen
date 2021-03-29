import {Link} from "react-router-dom";
// import Waiter from './Waiter'
import React from 'react';

const Entry = () =>{
    return (
        <div id="marco-secundario">
              <img id="logo-vacio" src="./img/logo-vacio.png"/>
              <div id="buttons-entry">
              <Link to="/waiter"><button id="mesero" type="button"> Mesero</button></Link>
              <Link to="/kitchen"><button id="cocina" type="button"> Cocina</button></Link>
              </div>
        </div>
    );
  };
  
  export default Entry;