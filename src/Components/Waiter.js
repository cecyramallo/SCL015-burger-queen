import {Link} from "react-router-dom";
import React from 'react';
const Waiter = () =>{
    return (
      <div>
        <label>Nombre</label><input type="text"/>
        <label>Turno</label> 
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