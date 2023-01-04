let fs=require("fs");
let path =require('path');
function treeFn(dirPath){
   dirPath = dirPath!=undefined ?dirPath:process.cwd();
    let folderContent=fs.readdirSync(dirPath);
   
    console.log(path.basename(dirPath));
   
    
     for(let i=0;i<folderContent.length;i++){
        let ab=path.join(dirPath,folderContent[i]);
        //to put arrow in front of folder >
    let ans=isFolder(ab);
    if(ans==true){
        console.log("\t " + ">"+ " "  +folderContent[i]); 
    }
      else{console.log("\t " + folderContent[i]);}   

     }

}

function isFolder(folderContent){
    let ans=fs.lstatSync(folderContent).isDirectory();
    return ans;
}

module.exports={
treeFn:treeFn
}