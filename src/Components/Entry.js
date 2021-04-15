import {Link} from "react-router-dom";
// import Waiter from './Waiter'
import React from 'react';
import './Entry.css'; 

const Entry = () =>{
    return (
        <div id="marco-secundario">
              <div className="buttons-entry">
              <Link to="/waiter"><button id="mesero" type="button"> Mesero</button></Link>
              <Link to="/kitchen"><button id="cocina" type="button"> Cocina</button></Link>
              </div>
        </div>
    );
  };
  
  export default Entry;