const fs=require("fs");

//async environment
 console.log("Before")
// //sync function
// let ans=fs.readFileSync("f1.txt","utf-8");
// console.log("output",ans);

//async function ->nodejs->confirmation->callBack->first parameter is saved forn errors

fs.readFile("f1.txt",frConf);

function frConf(err,data){
    if(err){
        console.log("error",err);
    } else{
        console.log(""+data);
    }
}
console.log("After");
console.log("i dont want to wait"); 
for(let i=0;i<=10;i++){
    console.log("mnumber is",i);
}