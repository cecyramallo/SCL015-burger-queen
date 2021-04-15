import React from 'react';
import {Link} from "react-router-dom";
import './Kitchen.css'; 
const Kitchen = () =>{
    return (
      <div  className="kitchen">
        <div className="content-kitchen">
        <label className="user-name">Nombre</label><input type="text"/>
        <label className="user-turno">Turno</label> 
        <select name="Turno" id="option-select">
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