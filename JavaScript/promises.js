console.log('*******promises start*******');
function sum(a,b){
   return new Promise((resolve,reject)=>{
       resolve(a+b);
   })
}

sum(1,2).then(result=>{
   console.log('im in result',result)
},
error=>{
   console.log(error)
});

function naturalSum(n){
    let sum=0;
    return new Promise((resolve,result)=>{
        for(let i=1;i<=n;i++){
           sum+=i;
        }
        resolve(sum);
        
     })
}
naturalSum(9).then(result=>{
  console.log(result,'sum')
})
console.log('*******promises end*******');