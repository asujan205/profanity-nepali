import React,{useState,useEffect} from 'react';
import './App.css';
import useLocalStorage from './locallyStorageHashTable.js'
export default function useHashedfunction(wordCheck) {
const[key,setKey]=useState([]);
const[hasharray,setArray]=useState([]);
const[swearwords,setSwear]=useState([])
let[checkVal,setCheckval]=useState();
useEffect(()=>{
 fetch("./profanity.json")
 .then(res=>res.json())
 .then(setSwear)  
},[]) 
var len=wordCheck.length;

console.log(wordCheck)
let size=swearwords.length;

const hashkey=(key)=>{
  
return key.length %size;

}
const  set=(value)=>{

    let index = hashkey(value);


    if(!hasharray[index]){
      hasharray[index] = [ ];
    }
    


    hasharray[index].push([value])

 
  }



//const[array,sethashArray]=useLocalStorage(hasharray);

const mapData=(swearwords)=>{

 swearwords.map(data=>{set(data)})
}
mapData(swearwords)

const get=(value)=>{
    
 let index=hashkey(value)
 if(!hasharray[index]) {return false}
 for(let bucket of hasharray[index]){
  if(bucket[0]===value)
  {
    return true
  
  }

  }
 
}
for (var i = wordCheck.length - 1; i >= 0; i--) {
  
 checkVal=get(wordCheck[i])
 console.log(checkVal)
    }
 




  return[checkVal,setCheckval];

}

