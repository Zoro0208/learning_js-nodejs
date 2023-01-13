const fs=require("fs");


// console.log("Before");
//     let promise=fs.promises.readFile("f1.txt");
//     console.log("Promise Before",promise);
//     console.log("After")
    
//     function myFn(){
//          console.log("Promise After",promise);
//     }

//     setTimeout(myFn,2000);   


    async function fn(){    
        console.log("Before");
    let promise=fs.promises.readFile("f1.txt");
    console.log("Promise Before",promise);
    console.log("After");

    let value=await promise;
    console.log(value+"");
    
     }
     fn();
