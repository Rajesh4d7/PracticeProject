const express=require("express");
const app = express();
const routes = require('./src/routes/user');
let port = process.env.port | 3000;

app.use(express.json());
app.use(routes);

app.listen(port,()=>{
    console.log("server listening to port : "+port)
})