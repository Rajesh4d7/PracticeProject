const path=require('path')
const express=require('express');
const hbs=require('hbs');
const app=express();
app.use(express.static(path.join(__dirname,"../public")));
const viewpath=path.join(__dirname,"../templates/views")
const partial=path.join(__dirname,"../templates/partials")
app.set("view engine","hbs");
app.set("views", viewpath)
hbs.registerPartials(partial)
app.get('',(req,res)=>{
    res.render('index',{name:"Rajesh"})
});


app.get('/help',(req,res)=>{
    res.send({
        name:"Rajesh",
        lname:"Vannala"
    })
});

app.get('/sports',(req,res)=>{
    if(!req.query.sport){
       return res.send('please provide sport')
    }
    res.send([{
        name:'Dhoni',
        sport:'Cricket',
        from:'Jarkhand'
    },{
        name:'Kohli',
        sport:'Cricket',
        from:'Delhi'
    }])
});

app.get('/about',(req,res)=>{
    res.send("<h1>Hey welcome Rajesh Vannala</h1>")
});

app.get('/contact',(req,res)=>{
    res.send("help resp")
});
app.get('*',(req,res)=>{
    res.render("error")
});
app.listen(4200,()=>{
    console.log("server is up with port 4200")
})