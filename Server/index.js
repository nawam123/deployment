// import express from "express"
// import cors from "cors"

// const app=express()

// app.use(express.json())

// app.use(cors(
// {origin:
//     [
//     "http://localhost:5172",
//     "http://localhost:5173",
//     "http://localhost:3000",
//     // add production url
//     ],
//     credentials: true,
//     // methods: ["GET","POST", "PUT","PATCH","DELETE"]
// }
// ))

// // Api 
// app.get("/api/message",(req,res)=>{
//     res.json({message:"Hlo From Nawam"})
// });

// // Port Defining
// const PORT = 4000

// // Port Activating
// app.listen(PORT,"0.0.0.0",()=>console,console.log(`Server is Running at
//  http://localhost:${PORT}`));


import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://38.137.5.56:5173",   // public frontend
  ],
  credentials: true,
}));

app.get("/api/message", (req, res) => {
  res.json({ message: "Hlo From Nawam" });
});

const PORT = 4000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
