import React from 'react';
import './Header.css'; 
import Generatedtext from '../Assets/Generatedtext.png'
import Table from '../Assets/Table.png'
import Minuet from '../Assets/Minuet.png'

const Header = () =>{
    return (
      <div id="top">
        <header id="header">
          <div id="logo-home"><img src={Generatedtext} alt="logo letters"/>
          </div>
          <p>Dear</p>
          <p>Fecha</p>
          <div id="selects">
            <div id="table">
              <div id="table-icon"><img id="table-img" src={Table} alt="table icon"/></div>
              <select name="0" id="tables">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
            </div>
            <div id="minuet" size="18">
              <div id="minuet-icon"><img id="minuet-img" src={Minuet} alt="minuet icon" /></div>
              <input id="clients" type="number"/>
            </div>
          </div>
        </header>
      </div>
    );
  }
  
export default Header;