var mongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/";
mongoClient.connect(url,{useUnifiedTopology: true},(err,client)=>{
    if(err)
        throw err;
    let db = client.db('databaseName');
    db.collection("MongoTable").insertMany([
    {
        name:"rajesh",
        age:25,
        hobbies:["music","cricket","chess"],
        country:{
            name:"india",
            state:{
                name:"telangana"
            }
        }
    },
    {
        name : "koushik",
        age : 30,
        hobbies : ["carroms","cricket","chess"],
        country:{
            name:"india",
            state:{
                name:"andrapradesh"
            }
        }
    },{
        name:"manoj",
        age:27,
        hobbies:["tenis","cricket","chess"],
        country:{
            name:"india",
            state:{
                name:"tamilandu"
            }
        }
    },
    {
        name:"ravi",
        age:25,
        hobbies:["music","cricket","backet ball"],
        country:{
            name:"india",
            state:{
                name:"telangana"
            }
        }
    }
],(err,result)=>{
  client.close();
})

});