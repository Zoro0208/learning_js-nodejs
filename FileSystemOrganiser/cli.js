let helpFnObj=require("./Commands/help");
let treeFnObj=require("./Commands/tree");
let organizeFnObj=require("./Commands/organize");

let input=process.argv.slice(2);

let command=input[0];
let dirPath=input[1];

if(command=="help"){
  helpFnObj.helpFn();
}
else if(command=="tree"){
    treeFnObj.treeFn(dirPath);
}
else if(command=="organize"){
   organizeFnObj.organizeFn(dirPath);
  
}
else{
    console.log("wrong command typed");
}