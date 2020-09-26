const mongoose = require("./../db/mongoose")
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
let userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    reading:{
        type:Boolean
    },
    password:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        validate(value){
        if(!validator.isEmail(value))
            throw new Error("invalid email");
        }
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
});

userSchema.methods.getAuthorization= async function(){
        let user = this;
        let token = jwt.sign({_id:user._id.toString()},"mytoken")
        user['tokens']= user['tokens'].concat({token})
        await user.save();
        return token;
}

userSchema.statics.findByCredentials = async (email , password) => {
     const user = await User.findOne({email});
     if(!user){
        throw new Error("unable to login");
     }
     let isMatch = await bcrypt.compare(password , user.password);
     if(!isMatch)
        throw new Error("unable to login");
     return user;
}


userSchema.pre('save' ,async function(next){
    let user= this;
    if(user.isModified('password')){
        user['password']=await bcrypt.hash(user['password'],8)
    }
    next()
})

let User=mongoose.model('User', userSchema );

module.exports=User;