let fs=require("fs");
console.log("EveryCommand is commented :))");
// const { dirname } = require("path");


// let content=fs.readFileSync("readme.txt","utf-8");
// console.log(content);

// // CRUD---

// // creation
// fs.writeFileSync("newFile.txt","");

// //write-> create a file write the content into it
// //if file already exist ->replace content
// //fs.writeFileSync("newFile.txt","i have done something");
// fs.writeFileSync("newFile.txt","i have done somthing more");

// //append
// fs.appendFileSync("newFile.txt","  i have added somthing later");

// //deletion
//  fs.unlinkSync("readme.txt");

//***************************************************directory**************************************************************************** 

    //create
    // fs.mkdirSync("newFolder");
    
    //delete
    // fs.rmdirSync("toberemoved");

    //files and folder ->Get
    // let content=fs.readdirSync("C:\\Users\\DHIRAJ\\Desktop\\PepCoding\\NodeJS");
    // console.log(content);

   //  let path=fs.readdirSync(__dirname);
   //  // console.log(path);

   //   for(let i=0;i<path.length;i++){
   //      console.log(path[i]);
   //   }


   //Tells us weather given path is of file or directory
//   let randomPath= "C:\\Users\\DHIRAJ\\Desktop\\PepCoding\\NodeJS\\Web Dev";

//   let isFile=fs.lstatSync(randomPath).isFile();
//   let isDir=fs.lstatSync(randomPath).isDirectory();

//   console.log("Path belongs to file:",isFile,"folder:",isDir);