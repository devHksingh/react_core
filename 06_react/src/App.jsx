import { useEffect, useState } from "react";

export default function App() {
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setMessage("Data is fetched");
      })
      .catch((err) => {
        console.log("something went wrong", err);
      });
    return () => {}; // cleanup function
  }, []);
  const [message, setMessage] = useState("Loading...");
  const [data, setData] = useState([]);
  return (
    <div>
      <h1>Learning react in raw way</h1>
      <h2>{message}</h2>
      {data && data.map((post)=>(<div key={post.id}>
        <h2>{post.title}</h2>
        <span>{post.userId}</span>
        <p>{post.body}</p>

      </div>))}
    </div>
  );
}
// https://jsonplaceholder.typicode.com/posts
