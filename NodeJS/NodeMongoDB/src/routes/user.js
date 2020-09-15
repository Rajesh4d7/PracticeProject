const express = require("express");
const router = new express.Router();
const User = require('./../models/usermodel');

router.get("/userlist",async (req,res)=>{
    try{
        let users = await User.find({});  
        res.status(200).send(users)
    }catch(e){
        res.status(400).send(e)
    }    
})

router.get('/getuser', async (req,res)=>{
    try{
        let users = await User.find({name:req.query.name});
        if ( !users )
            return res.status(200).send( req.query.name +" user not available ")
        res.status(200).send(users)
    }catch(e){
        res.status(400).send(e);
    }
})

router.post("/insertuser", async (req,res)=>{
    let user = new User(req.body)
    try{
        let users =await user.save();
        res.status(201).send(users);
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.delete("/deleteuser/:id", async (req , res) => {
    try{
        let id = req.params.id;
        await User.findByIdAndDelete(id);
        let users = await User.find({});
        if ( !users ) {
            return res.status(200).send('users not awailable')
        }
        res.status(200).send(users)

    }catch(e){
        console.log(e)
    }
})

router.patch( '/updateuser/:id' , async ( req , res )=>{
    try{
        let id = req.params.id;
        let body = req.body;
        let allowupdates=["name","age"]
        let forupdates = Object.keys(body)
        let valid = allowupdates.every(allowupdate=>forupdates.includes(allowupdate));
        if( !valid ){
            return res.status(400).send("not allowed")
        }
        let user= await User.findByIdAndUpdate( id , body , { new : true } );
        res.status(200).send(user)

    }catch( e ) {
        res.status(400).send(e)
    }

})

module.exports = router;
