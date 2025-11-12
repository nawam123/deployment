import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";

  useEffect(() => {
    fetch(`${API_BASE}/api/message`)
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
