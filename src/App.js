import React, { useState, useEffect } from "react";
import "./App.css";
import useHashingfunction from "./hashing.js";

const App = () => {
  let [text, setText] = useState("");

  const setNewText = (e) => {
    setText(e.target.value);
  };

  const [checktext, setCheckText] = useHashingfunction(text);

  return (
    <div className="App">
      <h1>Profanity Checker</h1>
      <h1>Type word in Nepali for example : राम राम्रो मान्छे हो </h1>
      <p>Enter a sentence below and clickthe button below:</p>
      <textarea cols="30" rows="10" value={text} onChange={setNewText} />
      <br />
      {checktext}
      <br />
    </div>
  );
};
export default App;
