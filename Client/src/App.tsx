import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";

  useEffect(() => {
    fetch("http://http://38.137.5.56:4000/api/message")
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
