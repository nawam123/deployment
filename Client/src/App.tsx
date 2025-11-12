import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [message, setMessage] = useState("")
  useEffect(()=>{
    // http://localhost:4000 will removed in fetch if using proxy
    fetch("http://localhost:4000/api/message")
    .then((res)=>res.json())
    .then((data)=>setMessage(data.message))
    .catch((err)=>{
      console.error("Error Fetching Message",err)
    })
  },[])


  return (
    <>
      <h1>Welcome To Nawam Arora App </h1>
      <p className="read-the-docs"></p>
      <h3>data {message}</h3>   

    </>
  )
}

export default App
