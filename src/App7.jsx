import React from "react";
import useFetch from "./Hooks/useFetch";

export default function App7() {
  const { data: data1, dataLoading: dataLoading1 } = useFetch(
    "https://jsonplaceholder.typicode.com/users", (data) => data.map(item => ({id: item.id, name: item.name}))
  );
  const { data: data2, dataLoading: dataLoading2 } = useFetch(
    "https://jsonplaceholder.typicode.com/posts", (data) => data.map(item => ({id: item.id, title: item.title}))
  );

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1>Users</h1>
        <hr />
        {dataLoading1 && <p>Loadding...</p>}
        {data1?.map((item) => (
          <h3 key={item.id}>{item.name}</h3>
        ))}
      </div>
      <div>
        <h1>Posts</h1>
        <hr />
        {dataLoading2 && <p>Loadding...</p>}
        {data2.slice(0, 10)?.map((item) => (
          <h3 key={item.id}>{item.title}</h3>
        ))}
      </div>
    </div>
  );
}
