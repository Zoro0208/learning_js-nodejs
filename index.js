 //itrate over object if array is present in object
   // let types={

   //    media: ["mp4","mvk","mp3"],
   //    archives: ["zip","7z","rar","tae","gz","ar","iso","xz"],
   //    document :["docx","doc","pdf",'xlsx',"xls" ,"odt","ods","odp","odf","odg","txt"],
   //    app:['exe','dm','pkg',"deb"]
   //    }

   //    for(let key in types){
   //       let totalExt=types[key];
 
   //       for(let i=0;i<totalExt.length;i++){
   //         console.log(" \n"+totalExt[i]);
   //       }
   //    }

// fn();

// function fn(){
//   console.log("i am real");
// }
// function fn(){
//   console.log(" no i am real");
// }
// function fn(){
//   console.log("i am real also");
// }

//  fn();

// console.log("32",a);
// var a=10;
// function fn(){
//   console.log("35",a);
//   var a=20;
//   console.log("37",a);
// }
// console.log("39",a);
// fn();
// console.log("41",a);

//*************SCOPE***********

var a=10;
false
function b(){
  console.log('48',a);
}

function c(){
  var a=20;
  console.log("53",a);
  b();
  console.log("55",a);
}

console.log("58",a);
c();
console.log("60",a);


