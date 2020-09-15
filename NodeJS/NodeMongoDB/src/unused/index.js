const express=require('express');
const app=express();
const port=process.env.PORT | 3000;
let User=require('./src/mongoose');

//implicitly parse the request to json
app.use(express.json());

app.get("/userlist", (req,res)=>{
    User.find({}).then((user)=>{
        res.status(200).send(user)
    }).catch(err=>{
        res.status(400).send(err)
    })
    
})

app.get('/getuser',(req,res)=>{
    User.find({name:req.query.name}).then((user)=>{
        if(!user){
          return res.status(200).send(req.query.name +" user not available")
        }
        res.status(200).send(user)
    }).catch(err=>{
        res.status(400).send(err)
    })
})

app.post("/insertuser",(req,res)=>{
    let user = new User(req.body)
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch(err=>{
        res.status(400).send(err)
    })
})

app.listen(port,()=>{
    console.log("server is up")
})

