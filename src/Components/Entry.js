import {Link} from "react-router-dom";
// import Waiter from './Waiter'
import React from 'react';

const Entry = () =>{
    return (
    <div>
      <div id="logo">
        <img src="" alt=""/>
      </div>
      <div>
      <Link to="/waiter"><button type="button"> Mesero</button></Link>
      <Link to="/kitchen"><button type="button"> Cocina</button></Link>
        </div> 
      </div>
    );
  };
  
  export default Entry;