const express=require('express')

const app=express()

app.get(' ',(res,req)=>{
    res.send("WELCOME TO HOME PAGE")
})
app.get('/about',(res,req)=>{
    res.send("<h1>About page</h1>")
})
app.get('/weather',(res,req)=>{
    res.send({
        forecast:"It's hot",
        location:"Jammu"
    })
})
app.listen(3000,()=>{
    console.log("Server is on port 3000")
})