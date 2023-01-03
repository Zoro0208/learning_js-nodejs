let path=require("path");

// console.log("dirname",__dirname); //---> gives path of current folder
// console.log("cwd",process.cwd());
// console.log("filename",__filename);//--> give path of current file

let folderName="C:";
let NxtFolder="Movies";
let childFolder="bolllywood";
let acutalPath="Avengers End Game.mp4";

//path.join construst or build the path of give folders

let address=path.join(folderName,NxtFolder,childFolder,acutalPath);
console.log(address);