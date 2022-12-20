const http=require('http')
const {load}=require('./t1.js')
const express=require('express')
const app=express()
const port=3022
const cors=require('cors')
app.use(cors({
    origin:"*",
}))
app.listen(port,()=>console.log(`Server is waiting at port ${port}`))
app.get('/user',(req,res)=>{
    res.send(load())
})
