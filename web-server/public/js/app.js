
const weatherform=document.querySelector('form')
const searchform=document.querySelector('input')
const messege1=document.querySelector('#messege-1')
const messege2=document.querySelector('#messege-2')

   // messege1.textContent=''

weatherform.addEventListener('submit',()=>{
    const location=searchform.value
    messege1.textContent='LOADING....'
    fetch('http://localhost:3000/weather?address='+ location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
           messege1.textContent='TRY SOMEOTHER LOCATION DUDE'
        }
        else{
            messege1.textContent=data.location
            messege2.textContent=data.location
        }
    })
})
})