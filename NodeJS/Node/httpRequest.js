const http=require('http');
const url=`http://api.weatherstack.com/current?access_key=b49636100cd56361b18e8f4f13bb6de0&query=New York`;
const httpReq = http.request(url,response=>{
    let data='';
    response.on('data',chunk=>{
        data+=chunk.toString();
    })
    response.on('end',()=>{
        console.log(JSON.parse(data))
    })
});
 
httpReq.end();
module.exports=httpReq;