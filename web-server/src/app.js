const path=require('path')
const express=require('express')

const app=express()
const dirpath=path.join(__dirname,'../public')
app.use(express.static(dirpath))
app.set('view engine', 'hbs')

app.get('',(req,res)=>{
    res.render('index',{
        title:'1st page',
        name:'Arjun'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'photo',
        des:'its here'
    })
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