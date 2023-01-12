const fs=require('fs');
let htmlContent=fs.readFileSync("sampleJsDom.html","utf-8")



const jsdom = require("jsdom");
const  JSDOM  = jsdom.JSDOM;
//1. string form me-> html content provide
//pass to newJSDOM
let dom= new JSDOM(htmlContent);

//2.
let document =dom.window.document;

//3, logic-> help to get your html element if you pass aselector
// //CSS selector-> first occurence of that html element
// document.querySelector("p");

//CSS selector-> all occurence of that html element.
//return->array ke andar elements
const allPs =document.querySelectorAll("p");
console.log(allPs.length);

let firstParaKaContent=allPs[0].textContent;
console.log(firstParaKaContent);

let secondParaKaContent=allPs[1].textContent;
console.log(secondParaKaContent);

const allIDs =document.querySelectorAll("#unique");
let content=allIDs[0].textContent;
console.log(content)