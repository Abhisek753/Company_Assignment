const express = require("express");
const cors=require("cors")
const { connection } = require("./db");
const { blackCofferRouter } = require("./routes/Blackcoffer.routes");
require("dotenv").config();


const app = express();
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/coffer",blackCofferRouter);


app.listen(process.env.PORT,async() => {
   try{
    await connection
    console.log("Connected to db")
   }catch(err){
    console.log("err",err)
   }

  console.log(`Server is Runing on port ${process.env.PORT}`);
});
