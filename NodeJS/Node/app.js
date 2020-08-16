const http=require('http');
const fs=require('fs');
const validator=require('validator')
const chalk=require('chalk')
const testFile=require('./test');
const req=require('./requestAPI');
const httpReq=require('./httpRequest');
const yargs=require('yargs')
const { getMaxListeners } = require('process');
//const { command } = require('yargs');
const comandArgs=process.argv;
const host='127.0.0.1';
const port=8080;
// fs.writeFileSync('main.text',"helo world this is my new nodejs file");
// fs.writeFileSync('test.json',JSON.stringify({'name':'Rajesh','lname':'Vannala'}));
//let data=JSON.parse(fs.readFileSync('test.json'));

// console.log(data.name,"access")
// console.log(fs.readFileSync('main.text').toString());
//console.log(testFile(),"***")
// console.log(chalk.blue.inverse.bold("hey RAJESH"))
// console.log(validator.isURL('vannalarajeshrj@gmail.com'))
// const server=http.createServer((req,res)=>{
// 	res.statusCode=200;
// 	res.setHeader('Content-Type','text/plain');
// 	res.end('helo how are you');

// });
//for adding command
yargs.command({
	command:'add',
	describe:"add record",
	handler:function(argv){
		testFile.add(argv.name,argv.lname)
	}
})
yargs.command({
	command:'remove',
	describe:"remove record",
	handler:function(argv){
		testFile.remove(argv.name)
	}
})
yargs.parse();


// server.listen(port,host,()=>{
// 	console.log(`Server running at http://${host}:${port}/`);
// });
