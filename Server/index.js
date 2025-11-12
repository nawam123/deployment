// server/server.js

import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Good to keep for local testing
      "http://localhost:5174",
      "http://localhost:3000",
      "http://localhost:443",
      "http://38.137.5.56:443", // <-- This is the only public one you need
      "http://38.137.5.56:3000", // <-- This is the only public one you need
      "http://38.137.5.56:4000", // <-- This is the only public one you need
  
    ],
    credentials: true,
  })
);

// API route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from chaicode server" });
});

const PORT = 4000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
