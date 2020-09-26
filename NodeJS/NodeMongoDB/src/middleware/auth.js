const jwt = require('jsonwebtoken');
const User = require('../models/usermodel');

const auth = async (req,res,next)=>{
    try{
        let token= req.header('Authorization').replace('Bearer ',"");
        let decoded = jwt.verify(token,'mytoken')
        user =await User.findOne({_id:decoded._id,"tokens.token":token})
        if( !user ){
            throw new Error();
        }
        req.token=token;
        req.user=user;
        next()
    }catch(e){
        res.status(401).send({error:"please authenticate"})
    }
}

module.exports = auth;