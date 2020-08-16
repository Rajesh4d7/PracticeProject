const  request= require("request");
const url=`http://api.weatherstack.com/current
? access_key = YOUR_ACCESS_KEY
& query = New York`;

let req=request({url,json:true},(error,data)=>{
    if(error){
       console.log("network problem please try again")
    }
    else if(data){
        console.log(data)
    }
    else{
        console.log('data not available')
    }
});

module.exports=req;