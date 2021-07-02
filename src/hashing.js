import React,{useState,useEffect} from 'react';
import './App.css';

export default function useHashedfunction(wordCheck) {
const[key,setKey]=useState([]);
const[hasharray,setArray]=useState([]);
const[swearwords,setSwear]=useState([])
let[checkVal,setCheckval]=useState();
useEffect(()=>{
 fetch("./profanity.json").then(
    function(res){
    return res.json()
  }).then(function(data){
  // store Data in State Data Variable
    setSwear(data)
  }).catch(
    function(err){
      console.log(err, ' error')
    }
  )
  
},[]) 


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
 checkVal=get(wordCheck)




  return[checkVal,setCheckval];

}

