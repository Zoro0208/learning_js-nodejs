let path= require("path");
let fs= require("fs");
const { fstat } = require("fs");

let modules=["Javascript","Browser","React","Git"];

let webDevPath= path.join(process.cwd(),"Web Dev");

if(fs.existsSync(webDevPath)){
    console.log("web Dev folder exist");
}
else{
    fs.mkdirSync(webDevPath);
}

//create modules

for(let i=0;i<modules.length;i++){

   let modulePath=path.join(webDevPath,modules[i] );

   if(fs.existsSync(modulePath)){
    console.log(modules[i],"already exists")
   }
   else{
    fs.mkdirSync(modulePath);
   }
 

}

