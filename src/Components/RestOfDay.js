// import NavBar from  './NavBar'
// import ButtonNav from './ButtonNav'
// import OrderTable from './OrderTable'
 import restOfDayMenu from './Productos'


import React from 'react';

// import Generatedtext from '../Assets/Generatedtext.png'
const RestOfDay = () =>{

  const data = restOfDayMenu
  console.log(data)
  return (
    <div id="contenedor">
      {
      data.types.map((type)=>
        <div key={type.name}>
          <img id="btn-cow" src={type.image} />
          <button>Simple</button>
          <button>Doble</button>
          </div>
        )
      }
      <div id="complementos">
      {
      data.accompaniments.map((accompaniment)=>
        <div key={accompaniment.name}>
          <img id="btn-cow" src={accompaniment.image} />
          </div>
        )
      }
    </div>
    </div>
    );
  }
  
  
  export default RestOfDay;