import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Breakfast from './Breakfast'
import OrderState from './OrderState'
import OrderTable from './OrderTable'
import RestOfDay from './RestOfDay'
const MenuNav = () =>{
    return (
      <Router>
      <div className="Container mt-5">
      <div className="btn-group">
        <Link to="/" className="btn btn-dark">
          Resto del Dia
          </Link>
          <Link to="/Breakfast" className="btn btn-dark">
          Desayuno
          </Link>
          <Link to="/OrderState" className="btn btn-dark">
          Estado
          </Link>
        <h2>Desayuno, Resto del dia, Estado </h2>
      </div>
      </div>
      </Router>
    );
  };
  
  export default MenuNav;