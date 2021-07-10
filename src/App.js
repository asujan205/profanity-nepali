import React,{useState,useEffect} from 'react'
import './App.css';
import useHashingfunction from './hashing.js';


const App = () => {

  const[text , setText] =useState('')
  const[Checkword,setCheckword]=useState('')
  var grawlixChars = ['!','@','#','$','%','&','*'];
const[word,setWord]=useState([])
//const [checktext,setCheck]=useState()

   const setNewText=(e)=>{
    setText(e.target.value);
    
   const word=text.split(' ')
   setWord(word)
   let m=word.length;
 console.log(word)
 
   
   
}


 

//console.log(Checkword)
const[checktext,setCheckText]=useHashingfunction(word)

  
const replaceWord=(word)=>{

    var keyReplacement = '', i, len;

    for (i = 0, len = word.length; i < len; i++) {
      keyReplacement += '*';
    }
    return keyReplacement;
 
     /* grawlix: {
    var keyReplacement = '',
      grawlixLen = grawlixChars.length,
      wordLen = word.length,
      rand,
      i;

    for (i = 0; i < wordLen; i++) {
      rand = Math.floor(Math.random() * grawlixLen);
      keyReplacement += grawlixChars[rand];
    }

    console.log(keyReplacement);
  }
*/
  
}
if(checktext===true){
 let replace=replaceWord(Checkword);
text.replace(Checkword,replace)
console.log(replace)
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
