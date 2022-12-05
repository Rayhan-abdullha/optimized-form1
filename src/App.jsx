import React, { useEffect } from "react";
import { useState } from "react";

const data = {}

export default function App() {
  const [users, setUser] = useState({});
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (data[`user-${count}`]){
        setUser(data[`user-${count}`])
        return
    } 
    setLoading(true)
      fetchUser(count)
      .then(data => setUser(data))
      .finally(() => {
        setLoading(false)
      })
    
  }, [count]);

  useEffect(() => {
    if (!data[`user-${count+1}`]){
      fetchUser(count+1)
    }
  },[count])
  const fetchUser = id => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => {
        data[`user-${id}`] = json
        return json
      })
  }

  return (
    <div>
      <div>
        <button onClick={() => setFatchData("users")}>Users</button>
      </div>
      <div>
        <button onClick={() => setCount(prev => prev+1)}>+</button>
        <button onClick={() => setCount(prev => prev-1)}>-</button>
      </div>
      <div>
        {
        loading ? <p>Loading...</p> : <div>
            <h1>{users.name}</h1>
        </div>
        }
      </div>
    </div>
  );
}
