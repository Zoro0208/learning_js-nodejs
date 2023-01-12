//Print result of winning team

const request = require('request');
const fs=require('fs');
const jsdom = require("jsdom");
let url='https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/kolkata-knight-riders-vs-lucknow-super-giants-66th-match-1304112/full-scorecard'


request(url, cb);

console.log("Before");
function cb (error, response, body) {

    if(error){
        console.log("error:",error.message);
    }else if(response&&response.statusCode==404){
        console.log("page not found");
    }else{
      
        console.log("html content recived");
        extractData(body);
    }

  }

  function extractData(htmlcontent){
    const  JSDOM  = jsdom.JSDOM;

let dom= new JSDOM(htmlcontent);

let document =dom.window.document;

let output=document.querySelectorAll(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title")

let result=output[0];
let ans=result.textContent;
console.log("Winning Team:" , ans);

}
 
  

  console.log("After");