import React,{useState,useEffect} from 'react';

export default function useLocalStorage(hashArray){
 const[array,setArray]=useState([]);
 useEffect(() => {
    const json = JSON.stringify(hashArray);
    localStorage.setItem("hashArray", json);
  }, [hashArray]);

	useEffect(() => {
  const json = localStorage.getItem("hashArray");
  const hashTable = JSON.parse(json);
  if (hashTable) {
    setArray(hashTable);
    
  }

}, []);
	console.log(array)
	return[array,setArray];
}
