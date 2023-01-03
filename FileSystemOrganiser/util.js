let types={

media: ["mp4","mvk","mp3","jpg"],
archives: ["zip","7z","rar","tae","gz","ar","iso","xz"],
document :["docx","doc","pdf",'xlsx',"xls" ,"odt","ods","odp","odf","odg","txt"],
app:['exe','dm','pkg',"deb"]
}

const { extname } = require("path");
let path=require("path");

function returnFolderName(fileName){

     let extName=path.extname(fileName);
     extName=extName.slice(1);
    //  console.log(extName)

     for(let key in types){
        let totalExt=types[key];

        for(let i=0;i<totalExt.length;i++){
            if(totalExt[i]==extName){
                console.log(key);
                return;
            }
        }
     }

    console.log("others");

}

returnFolderName("resumr.mp4");
returnFolderName("xyz.gfews");
