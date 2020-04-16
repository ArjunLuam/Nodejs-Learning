const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='https://api.darksky.net/forecast/426fc40a9f6667859a4104588c499986/'+latitude + ',' +longitude
    request({url: url,json: true },(error,{body})=>{
        if(error){//any error occurs
            callback('unable to connect to service',undefined)
        }
        else if(body.error){//coordinates are bad
            callback('unable to find location',undefined)
        }
        else{
            callback(undefined,body.daily.data[0].summary + ' It is currently ' +body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}
module.exports=forecast