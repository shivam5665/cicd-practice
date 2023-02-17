
const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("HELLO")
})

app.listen(4500,()=>{
console.log("RUnning at 4500")
})

