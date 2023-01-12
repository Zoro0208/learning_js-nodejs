const request = require('request');
const fs=require('fs');
const jsdom = require("jsdom");
let url='http://www.google.com';

request(url, cb);

//erroe->>if there is any error while executing the request
// reponse->> header+body
//boby->> html

console.log("Before");
function cb (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.

    if(error){
        console.log("error:",error.message);
    }else if(response&&response.statusCode==404){
        console.log("page not found");
    }else{
        // console.log(body);
        // fs.writeFileSync("webScrapping.html",body);
        console.log("html content recived");
        extractData(body);
    }

  }

  function extractData(htmlcontent){
    const  JSDOM  = jsdom.JSDOM;
//1. string form me-> html content provide
//pass to newJSDOM
let dom= new JSDOM(htmlcontent);

//2.
let document =dom.window.document;

// input -> value
let button=document.querySelectorAll(".lsb")
let contentOfButton =button[0].value;
console.log("content:" ,contentOfButton);

//rest->textcontent
let allLang=document.querySelectorAll("#SIvCob a")
console.log("Google is offered in these languages");
  
for(let i=0;i<allLang.length;i++){
    let content=allLang[i].textContent
    console.log("language:" ,content);
}
 
  }

  console.log("After");