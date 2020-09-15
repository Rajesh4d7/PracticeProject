const User = require('./mongoose');

let findanddelete = async (id)=>{
    let documents= await User.findByIdAndDelete(id);
    let count=await User.find({})
    return count;
}

findanddelete("5f5f981b8d262e564c7b10b3").then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err)
})