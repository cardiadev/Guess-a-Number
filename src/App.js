import './App.css';
import React, { useEffect, useState } from "react";


// Random Number between 1 to 30
let ranNum = Math.round(Math.random() * 30);
console.log(ranNum)

function App() {
  //React Hook useState
  const [value, setValue] = useState("");
  const [results, setResults] = useState("");
  const [chances, setChances] = useState(0);

  useEffect(()=>{
    if (chances === 3){
      setResults(<p className="alert alert-lose">{`You lose 😢, try it again 😉`}</p>);
      return 
    }else{

    }

  },[chances])

  const onClick = () => {

    if (chances < 3){

      // String to integer
      const userInput = parseInt(value, setValue); 
  
      // If clicks 'Start' without entering a number WARNING
      setResults(<p className="alert alert-danger">🚫 Only numbers are allowed 🚫</p>);
      
      // If input matches ranNum, WIN
      if (userInput === ranNum){
        setResults(<p className="alert alert-success">Congratulations you WIN 🏆</p>);
      }
      
      // If input is higher than ranNum, TO HIGH
      if (userInput > ranNum){
        setResults(<p className="alert alert-warning">{`No, you must write a number less than ${userInput}`}</p>);
        setChances(chances+1)
      }
      
      // If input is lower than ranNum, TO LOW
      if (userInput < ranNum){
        setResults(<p className="alert alert-warning">{`No, you must write a number greater than ${userInput}`}</p>);
        setChances(chances+1)
        
      }
    }

    

    };


  return (
      <div className="App">
        <h1>Guess a Number</h1>
        <h3>Choose a number between 1 and 30</h3>
          <input
            value={value}
            type="number"
            onChange= {e => setValue(e.target.value)}
          />
        <br/>
        <br/>
          <button type="submit" onClick={onClick}>Start</button>
        <br/>
        {results}
      </div>
  );


}

export default App;




