import React from "react";
import {Link} from "react-router-dom";

// import Breakfast from './Breakfast'
// import OrderState from './OrderState'
// import OrderTable from './OrderTable'
// import RestOfDay from './RestOfDay'
const ButtonNav = () =>{
  
    return (
      <div className="Container mt-5">
      <div className="btn-group">
        <Link to="/breakfast" className="btn btn-dark">
          Desayuno
          </Link>
          <Link to="/home" className="btn btn-dark">
          Resto del Dia
          </Link>
          <Link to="/orderstate" className="btn btn-dark">
          Estado del pedido
          </Link>
      </div>
      </div>
    );
  };
  
  export default ButtonNav;