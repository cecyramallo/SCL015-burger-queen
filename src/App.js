import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Breakfast from './Components/Breakfast'
import Entry from './Components/Entry'
import Kitchen from './Components/Kitchen'
import MenuNav from './Components/MenuNav'
import NavBar from './Components/NavBar'
import OrderState from './Components/OrderState'
import OrderTable from './Components/OrderTable'
import RestOfDay from './Components/RestOfDay'
import Waiter from './Components/Waiter'


import './App.css'; 

const App = () =>{
  return (
    <Router>
      <div className='container'>
        <h1>Sitio con React</h1>
        <hr />
        <Switch>
        <Route path='/'exact>
            <Entry />
            <Waiter />
         </Route>
        <Route path='/home'>
          
            <NavBar />
            <MenuNav />
            <RestOfDay />
            <OrderTable />
         </Route>
           </Switch>
      </div>
    </Router>
  );
}

export default App;
