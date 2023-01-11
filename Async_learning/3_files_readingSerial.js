const fs=require("fs");

//async environment
 console.log("Before")


fs.readFile("f1.txt",f1cb);
let outputcontent="";


function f1cb(err,data){
    if(err){
        console.log("error",err);
    } else{
        console.log(""+data);
        outputcontent+=data;
        fs.readFile("f2.txt",f2cb);
    }
}

function f2cb(err,data){
    if(err){
        console.log("error",err);
    } else{
        console.log(""+data);
        outputcontent+=data;
        fs.readFile("f3.txt",f3cb);
    }
}

function f3cb(err,data){
    if(err){
        console.log("error",err);
    } else{
        console.log(""+data);
        outputcontent+=data;
        fs.writeFile("f4.txt",outputcontent,writcB)
    }
}

function writcB(err,data){
    console.log("f4 is created");
}

console.log("After");

for(let i=0;i<=10;i++){
    console.log("mnumber is",i);
}