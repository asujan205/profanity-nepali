import React,{useState,useEffect} from 'react'
import './App.css';
import useHashingfunction from './hashing.js';


const App = () => {

  let [text ,setText] =useState('')
  

   const setNewText=(e)=>{
    setText(e.target.value);   
}


 


const[checktext,setCheckText]=useHashingfunction(text)

 


  return (
    <div className="App">
      <h1>Profanity Checker</h1>
      <p>Enter a sentence below and clickthe button below:</p>
      <textarea cols="30" rows='10' value={chcektext} onChange={setNewText} />
      <br />{checktext}<br />
  
    </div>

  );
}
export default App;
