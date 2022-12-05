import React from "react";
import { useState } from "react";
import { useEffect } from "react";

let timerId = null;

export default function App() {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [time, setTime] = useState(5);

  useEffect(() => {
    if (count === 5){
      setLock(true)
    }
  },[count])

  useEffect(() => {
    if (lock && timerId === null){
      timerId = setInterval(() => {
        setTime(
          prev => {
            if (prev !== 0){
              return prev-1
            } else {
              setLock(false)
              setCount(0)
              setTime(5)
              clearInterval(timerId)
            }
          }
        )
      }, 1000);
    }
  }, [lock])
  return (
    <div>
      {lock && <h1>Locked</h1>}
      <h1>Count: {count}</h1>
      <button disabled={lock} onClick={() => setCount((prev) => prev + 1)}>
        Count {lock && "locked"} {time}
      </button>
    </div>
  );
}
