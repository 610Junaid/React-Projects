import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  const removeCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="parent">
      <h1>Project 1 | Counter</h1>
      <div className="countDisplay">Counter : {counter}</div>
      <br />
      <div className="buttons">
        <button className="controlBtn" onClick={addCounter}>
          ADD
        </button>
        <button className="controlBtn" onClick={removeCounter}>
          REMOVE
        </button>
      </div>
    </div>
  );
}

export default App;
