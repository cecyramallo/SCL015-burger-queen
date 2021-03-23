import React from 'react';
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
      <button>Entrar</button>
      </div>
    );
  }
  
  export default Kitchen;