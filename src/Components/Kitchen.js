import React from 'react';
import {Link} from "react-router-dom";
const Kitchen = () =>{
    return (
      <div>
        <div>
        <label>Nombre</label><input type="text"/>
        <label>Turno</label> 
        <select name="Turno" id="">
          <option value="">Mañana</option>
          <option value="">Tarde</option>
          <option value="">Noche</option>
        </select>
      </div>
      <Link to="/home"><button type="button">Entrar</button></Link>
      </div>
    );
  }
  
  export default Kitchen;