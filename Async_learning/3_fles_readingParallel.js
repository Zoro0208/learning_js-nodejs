const fs=require("fs");

//async environment
 console.log("Before")


fs.readFile("f1.txt",f1cb);
fs.readFile("f2.txt",f2cb);
fs.readFile("f3.txt",f3cb);

function f1cb(err,data){
    if(err){
        console.log("error",err);
    } else{
        console.log(""+data);
    }
}

function f2cb(err,data){
    if(err){
        console.log("error",err);
    } else{
        console.log(""+data);
    }
}

function f3cb(err,data){
    if(err){
        console.log("error",err);
    } else{
        console.log(""+data);
    }
}

console.log("After");

for(let i=0;i<=10;i++){
    console.log("mnumber is",i);
}