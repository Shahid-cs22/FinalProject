const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const router = require("./src/routes/userRoutes.js")
dotenv.config();

const app = express();

// connect database 
connectDB();

app.use(express.json());



app.use("/users", router);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
