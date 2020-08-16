const fs=require('fs');
const { get } = require('http');
const chalk = require('chalk');
function getName(){
    return "Hi, this is Rajesh Vannala";
}
function add ( name , lname ) {
   let data = getData ();
   let duplicates = data.filter(ele =>{
      return ele.name==name;
   });

   if(duplicates.length == 0){
       data.push({
           name:name,
           lname:lname
       })
       fs.writeFileSync('./test.json' , JSON.stringify(data))
   }
   else{
       console.log(name+" is already exist")
   }
}
function getData(){
   try{
     let data= fs.readFileSync('./test.json').toString();
     return JSON.parse(data);
   }
   catch{
       return [];
   }  
}
function remove (name) {
   let data=getData();
   let flag=false;
   let newData=data.filter(ele=>{
      flag=ele.name === name;
      return ele.name !== name;
   })
   if(flag&&data.length>0){
      fs.writeFileSync('test.json',JSON.stringify(newData))
      console.log(chalk.green.inverse.bold(name+" removed successfully"))
   }
   else{
       console.log(chalk.green.inverse.bold(name +" not exist"))
   }

}
module.exports= {
    getName:getName,
    add:add,
    remove:remove
};