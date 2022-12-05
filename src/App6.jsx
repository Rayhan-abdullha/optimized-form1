import React from "react";
import "./App.css";
import useHooks from "./Hooks/useHooks";

export default function App() {
  const {handleInc: handleInc1, handleDec: handleDec1, count: count1} = useHooks({inital: 0, upperBound: 15, lowerBound: 0})
  const {handleDec: handleDec2, handleInc: handleInc2, count: count2} = useHooks({inital: 0, upperBound: 10, lowerBound: -5})
  return (
    <div>
      <h1>count: {count1}</h1>
      <h1>count: {count2}</h1>
      <button onClick={handleInc1}>+</button>
      <button onClick={handleDec1}>-</button>

      <div>
      <button onClick={handleInc2}>+</button>
      <button onClick={handleDec2}>-</button>
      </div>
    </div>
  );
}
