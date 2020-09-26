const express = require("express");
const router = new express.Router();
const User = require('./../models/usermodel');
const jwt = require('jsonwebtoken');
const auth =require('../middleware/auth')
// const bcrypt = require("bcryptjs");
// const { update } = require("./../models/usermodel");


router.post('/user/login', async (req,res)=>{
    try{
        const users = await User.findByCredentials(req.body.email , req.body.password)
        const token = await users.getAuthorization();
        res.status(200).send(users);
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.post('/user/logout', auth ,async (req ,res)=>{
    try{
        req.user.tokens =  req.user.tokens.filter(tokens=> tokens.token!== req.token);
        await req.user.save()
        res.status(200).send(req.user);
    }catch(e){
        res.status(400).send({error:e})
    }
})

router.post('/user/logoutall' ,auth ,async (req, res)=>{
    try{
        req.user.tokens=[];
        await req.user.save()
        res.status(200).send(req.user)
    }catch(e){
        res.status(400).send({error:e})
    }
})

router.get("/user/me", auth ,async (req,res)=>{
    res.status(200).send(req.user)

})

router.get("/userlist",async (req,res)=>{
    try{
        let users = await User.find({});
        res.status(200).send(users)
    }catch(e){
        res.status(400).send(e)
    }    
})

router.get('/getuser', auth ,async (req,res)=>{
    try{
        //let users = await User.find({name:req.query.name});
        // if ( !users )
        //     return res.status(200).send( req.query.name +" user not available ")
        res.status(200).send(req.user)
    }catch(e){
        res.status(400).send(e);
    }
})

router.post("/insertuser", async (req,res)=>{
    let user = new User(req.body)
    try{
        await user.save();
        const token = await user.getAuthorization();
        res.status(201).send(user);
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.delete("/deleteuser", auth , async (req , res) => {
    try{
        // let id = req.params.id;
        // await User.findByIdAndDelete(id);
        // let users = await User.find({});
        // if ( !users ) {
        //     return res.status(200).send('users not awailable')
        // }
        req.user.remove();
        res.status(200).send(req.user)

    }catch(e){
        res.status(401).send(e)

    }
})

router.patch( '/updateuser' , auth , async ( req , res )=>{
    try{
        //let id = req.params.id;
        let body = req.body;
        let allowupdates=["name","age","password"]
        let forupdates = Object.keys(body)
        let valid = allowupdates.every(allowupdate=>forupdates.includes(allowupdate));
        if( !valid ){
            return res.status(400).send("not allowed")
        }
        //let user= await User.findByIdAndUpdate( id );
        forupdates.forEach(update=>{
            req.user[update]=body[update]
        })
        await req.user.save();
        res.status(200).send(req.user)
    }catch( e ) {
        res.status(400).send(e)
    }

})

module.exports = router;
