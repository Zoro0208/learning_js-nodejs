let fs=require("fs");
let path=require("path");

//input from user
let input=process.argv.slice(2);
// console.log(input);

let moduleName=input[0];
let numberofLecture=input[1];

let modulePath=path.join(process.cwd(),"Web Dev",moduleName);

if(fs.existsSync(modulePath)){
    console.log(moduleName,"already exist");
}
else{
    fs.mkdirSync(modulePath);
}

for(let i=1;i<=numberofLecture;i++){
  
    let lectureName="Lecture-"+i;
    let lecturePath=path.join(modulePath,lectureName);

    if(fs.existsSync(lecturePath)){
        console.log(lectureName,"already exist");
    }
    else{
        fs.mkdirSync(lecturePath);
    }

   let readmePath=path.join(lecturePath,"readme.md");
if(fs.existsSync(readmePath)){
    console.log("Alread exists");
}
else{
    fs.writeFileSync(readmePath,"");
}

}