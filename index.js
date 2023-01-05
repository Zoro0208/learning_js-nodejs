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
// var is functiion scope 
// let and const is block scope

// var a=10;
// false
// function b(){
//   console.log('48',a);
// }

// function c(){
//   var a=20;
//   console.log("53",a);
//   b();
//   console.log("55",a);
// }

// console.log("58",a);
// c();
// console.log("60",a);

//*************************** Types of Function ****************************
// //1.function Statement
// function fn(){
//   console.log("i am a statement");
// }
// fn();


// //2.function expressions
// let fnAddressHolder=function() {
//   console.log("I am a function expression");
//   }
//   fnAddressHolder();


//   //3. IIFE-> immediately invoked function expression
//      (function IIFE(){
//       console.log("I am IIFE");
//      })();


//      //4.  arrow-> function expression
//      // mostly used react

//      let arrowFn=()=>{
//       console.log("I am arrow fn");
//      }
//      arrowFn();




// *********function are also treated as varible in js ***********

//assignment 
// function fn(){
//   console.log("fn is function");
//   return 10;
// }
//you have to put address of fn in variable anotherFn
// let anotherFn=fn;
// let anotherReturnValue=fn();
// console.log("anotherReturnValue",anotherReturnValue);
// anotherFn();


//pass to function as aparameter
// let arr1=[1,2,3,4,5];
// function fn(param){
//   console.log("param",param)
//   }
//   fn(arr1);
// function getfunction(param){
//   console.log("iam get function");
//   console.log("param",param);
//   param();
// }
// getfunction(chotaFn);
// function chotaFn(){
//   console.log("I am a chota function");
// }


//return from a function
// function fn1(){
//   let obj={name:"Dhiraj"};
//   return obj;
// }
// let rval=fn1();
// console.log(rval);


// function outer(){
//   console.log("I am outer function");
//   return function inner(){
//     console.log("i am inner function runs after you call me");
//   }
// }

// let inner=outer();
// console.log("*******After this line i will call inner**********");
// inner();
