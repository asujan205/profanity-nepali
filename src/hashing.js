import React, { useState, useEffect } from "react";
import "./App.css";
import useLocalStorage from "./locallyStorageHashTable.js";
export default function useHashedfunction(wordCheck) {
  const [key, setKey] = useState([]);
  const [hasharray, setArray] = useState([]);
  const [swearwords, setSwear] = useState([]);
  let [checkVal, setCheckval] = useState();

  useEffect(() => {
    fetch("./profanity.json")
      .then((res) => res.json())
      .then(setSwear);
  }, []);
  console.log(wordCheck);

  let size = swearwords.length;

  const hashkey = (key) => {
    return key.length % size;
  };
  const set = (value) => {
    let index = hashkey(value);

    if (!hasharray[index]) {
      hasharray[index] = [];
    }

    hasharray[index].push([value]);
  };

  const mapData = (swearwords) => {
    swearwords.map((data) => {
      set(data);
    });
  };
  mapData(swearwords);

  const get = (value) => {
    let index = hashkey(value);
    if (!hasharray[index]) {
      return false;
    }
    for (let bucket of hasharray[index]) {
      if (bucket[0] === value) {
        return true;
      }
    }
  };

  let word = wordCheck.split(" ");

  //   const replaceWord = (word) => {
  //     var keyReplacement = "",
  //       i,
  //       len;

  //     for (i = 0, len = word.length; i < len; i++) {

  //       keyReplacement += "*";
  //     }
  //     return keyReplacement;

  //     /* grawlix: {
  //     var keyReplacement = '',
  //       grawlixLen = grawlixChars.length,
  //       wordLen = word.length,
  //       rand,
  //       i;

  //     for (i = 0; i < wordLen; i++) {
  //       rand = Math.floor(Math.random() * grawlixLen);
  //       keyReplacement += grawlixChars[rand];
  //     }

  //     console.log(keyReplacement);
  //   }
  // */
  //   };
  const replaceWord = (word) => {
    if (word.length <= 2) {
      return word; // Return the original word if it has two or fewer letters
    }

    var keyReplacement = word[0] + word[1]; // Keep the first two letters unchanged

    for (let i = 2, len = word.length; i < len; i++) {
      keyReplacement += "*";
    }

    return keyReplacement;
  };

  for (var i = word.length - 1; i >= 0; i--) {
    let checktext = get(word[i]);
    if (checktext === true) {
      let replace = replaceWord(word[i]);

      wordCheck = wordCheck.replace(word[i], replace);
    }
  }

  checkVal = wordCheck;

  return [checkVal, setCheckval];
}
