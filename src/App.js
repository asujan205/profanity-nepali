import React,{useState} from 'react'
import './App.css';

import useHashingfunction from './hashing.js';


const App = () => {

  const[text , setText] =useState('')
  const[Checkword,setCheckword]=useState('')

  
   const setNewText=(e)=>{
    setText(e.target.value);
   
    const word=text.split(" ")
    
   let  m=word.length;
   setCheckword(word[m-1]);
   }

const[checktext,setCheckText]=useHashingfunction(Checkword);

 
  
const replaceWord=(word)=>{

    var keyReplacement = '', i, len;

    for (i = 0, len = word.length; i < len; i++) {
      keyReplacement += '*';
    }
    console.log(keyReplacement);

    

  
}
if(checktext===true){
 replaceWord(Checkword);


}


  return (
    <div className="App">
      <h1>Profanity Checker</h1>
      <p>Enter a sentence below and clickthe button below:</p>
      <textarea cols="30" rows='10' value={text} onChange={setNewText} />
      <br />
      <button  >Profanity Check</button>
    </div>

  );
}
export default App;
