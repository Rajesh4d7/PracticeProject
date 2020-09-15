const mongoose = require("./../db/mongoose")
const validator = require("validator");

let User=mongoose.model('User',{
    name:{
        type:String
    },
    age:{
        type:Number
    },
    reading:{
        type:Boolean
    }
});

module.exports=User;