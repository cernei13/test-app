import React from "react";
import './App.css';
import DATASET from "./DATASET.json";
import {useState} from "react";


 const App = (numStr)=> {
   const [searchItem, setSearchItem]= useState('');
  return (
    <div className="App">
    <input placeholder="Search your awesome name" type="text" 
    onChange={event=>{setSearchItem(event.target.value)}}/>

    {DATASET.filter((val) =>{
      if (searchItem === ""){
        return val
      }else if(val.name.toLowerCase().includes(searchItem.toLowerCase())){
        return val
      }
    }).map((val,key)=>{
      return <div className="pedro" key={key}> 
      <p>
      {val.name}
      </p>
      
      </div>;
    })}
    </div>
  );
  }

export default App;
