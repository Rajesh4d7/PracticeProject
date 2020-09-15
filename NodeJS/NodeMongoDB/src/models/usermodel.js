const mongoose = require("./../db/mongoose")
const validator = require("validator");
const bcrypt = require("bcryptjs")
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

    }
})

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
        console.log(user['password'],"user['password']")
        user['password']=await bcrypt.hash(user['password'],8)
    }
    next()
})
let User=mongoose.model('User', userSchema );

module.exports=User;