const express = require('express');
const { blackCofferModel } = require("../model/Blackcoffer.model")

const blackCofferRouter=express.Router()

blackCofferRouter.get("/",async(req,res)=>{
    let filter=req.query
    try{
   let data=await blackCofferModel.find(filter)
   console.log("data")
    res.send(data)
    }catch(err){
    console.log("err",err)
    }
// res.send("gangu")

})
module.exports={
    blackCofferRouter
}

