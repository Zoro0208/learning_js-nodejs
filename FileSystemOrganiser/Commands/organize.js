let fs=require("fs");
let path=require("path");

let types={

    media: ["mp4","mvk","mp3","jpg"],
    archives: ["zip","7z","rar","tae","gz","ar","iso","xz"],
    document :["docx","doc","pdf",'xlsx',"xls" ,"odt","ods","odp","odf","odg","txt"],
    app:['exe','dm','pkg',"deb"]
    }


function organizeFn(dirPath){

    // console.log("organize command executed",dirPath!=undefined?dirPath: process.cwd() );
    organizeHelper(dirPath);

   
}

function organizeHelper(dirPath){

    let organizeDirPath=path.join(dirPath,"organized_Dir");

    let doesFolderExist=fs.existsSync(organizeDirPath);
     if(doesFolderExist==false){
        fs.mkdirSync(organizeDirPath);
     }

       let names=fs.readdirSync(dirPath)
     for(let i=0;i<names.length;i++){
        let assetPath=path.join(dirPath,names[i]);
         let ans= isfile(assetPath);
         if(ans==true){
            let type=getType(assetPath);
            copyToThatType(assetPath,type,organizeDirPath);
         }

        
     }

}

function isfile(assetPath){
        //file or folder
         let ans=  fs.lstatSync(assetPath).isFile();
      return ans;
}

function getType(assetPath){

    let extName=path.extname(assetPath);
     extName=extName.slice(1);
    //  console.log(extName)

     for(let key in types){
        let totalExt=types[key];

        for(let i=0;i<totalExt.length;i++){
            if(totalExt[i]==extName){
              
                return key;
            }
        }
     }

    return "others";
}

function copyToThatType(assetPath,type,organizeDirPath ){
     //organized_dir->type ale folder create
    let destFolderPath= path.join(organizeDirPath,type);
    if(fs.existsSync(destFolderPath)==false){
        fs.mkdirSync(destFolderPath);
    }
    //content copy
    let originalName=path.basename(assetPath);
    let destFilePath=path.join(destFolderPath,originalName);
    fs.copyFileSync(assetPath,destFilePath); 
}

module.exports={
organizeFn:organizeFn
}