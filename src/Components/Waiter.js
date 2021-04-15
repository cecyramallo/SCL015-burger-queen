import {Link} from "react-router-dom";
import React from 'react';
const Waiter = () =>{
    return (
      <div className="container-waiter">
        <label className="nombre">Nombre</label><input type="text"/>
        <label className="turno">Turno</label> 
        <select name="Turno" id="">
          <option value="">Mañana</option>
          <option value="">Tarde</option>
          <option value="">Noche</option>
        </select>
        <Link to="/home"><button type="button">Entrar</button></Link>
      </div>
    );
  }
  
  export default Waiter;