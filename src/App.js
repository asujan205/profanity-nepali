import React,{useState,useEffect} from 'react'
import './App.css';
import useHashingfunction from './hashing.js';


const App = () => {

  let [text ,setText] =useState('')
  let [Checkword,setCheckword]=useState('')
  var grawlixChars = ['!','@','#','$','%','&','*'];
let [word,setWord]=useState([])
//const [checktext,setCheck]=useState()

   const setNewText=(e)=>{
    setText(e.target.value);   
}


 

//console.log(Checkword)
const[checktext,setCheckText]=useHashingfunction(text)

  text=checktext


  return (
    <div className="App">
      <h1>Profanity Checker</h1>
      <p>Enter a sentence below and clickthe button below:</p>
      <textarea cols="30" rows='10' value={text} onChange={setNewText} />
      <br />{text}<br />
  
    </div>

  );
}
export default App;
