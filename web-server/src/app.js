const path=require('path')
const express=require('express')
const hbs=require('hbs')

const app=express()
const dirpath=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')
app.use(express.static(dirpath))
app.set('view engine', 'hbs')
app.set('views',viewpath)
hbs.registerPartials(partialpath)
app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'Jammu'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'For further help',
        name:'Jammu division=7889608162'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Arjun',
        errormessege:'ARTICLE NOT FOUND'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'photo',
        name:'Arjun'
    })
})
app.get('/weather',(res,req)=>{
    res.send({
        forecast:"It's hot",
        location:"Jammu"
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Arjun',
        errormessege:'PAGE NOT FOUND'
    })
})


app.listen(3000,()=>{
    console.log("Server is on port 3000")
})