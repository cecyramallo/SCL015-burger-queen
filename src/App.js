import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  }from "react-router-dom";
import "./firebase-config"
import firebase from "firebase/app"
import Breakfast from './Components/Breakfast'
import Entry from './Components/Entry'
import Kitchen from './Components/Kitchen'
import ButtonNav from './Components/ButtonNav'
import NavBar from './Components/NavBar'
import OrderState from './Components/OrderState'
import OrderTable from './Components/OrderTable'
import RestOfDay from './Components/RestOfDay'
import Waiter from './Components/Waiter'
import StateTable from './Components/StateTable'

import './App.css'; 

const App = () =>{
  return (
    <Router>
      <div className='container'>
        <Switch>
        <Route path='/'exact>
            <Entry />
            <Waiter />
         </Route>
        <Route path='/kitchen'>
            <Entry />
            <Kitchen />
         </Route>
        <Route path='/home'>
            <NavBar />
            <ButtonNav />
            <RestOfDay />
            <OrderTable />
            </Route>
        <Route path='/breakfast'>
            <NavBar />
            <ButtonNav />
            <Breakfast />
            <OrderTable />
         </Route>
        <Route path='/orderstate'>
            <NavBar />
            <ButtonNav />
            <OrderState />
            <StateTable />
        </Route>
        <Route path='/waiter'>
            <Entry />
            <Waiter />
        </Route>
           </Switch>
      </div>
    </Router>
  );
}

export default App;
