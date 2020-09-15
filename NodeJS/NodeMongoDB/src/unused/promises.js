const User = require("./mongoose");


User.deleteMany({"name" : "Rajesh Vannala"}).then(()=>{
    return User.countDocuments({})
}).then(count=>{
    console.log(count)
}).catch(e=>{
    console.log(e)
})