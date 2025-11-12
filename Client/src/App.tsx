import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");


  useEffect(() => {
    fetch("http://38.137.5.56:3000/api/message")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Error fetching message:", err));
  }, []);

  return (
    <>
      <h1>Welcome To Nawam Arora App</h1>
      <h3>data: {message}</h3>
    </>
  );
}

export default App;
