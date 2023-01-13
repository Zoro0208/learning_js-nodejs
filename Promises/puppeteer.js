//controls a headless browser-> browser that is bt default not visible

const puppeteer=require("puppeteer");
//nearly every fun. of puppeteer returns promise

async function fn(){
    const browserRepresentativeObj=await puppeteer.launch({
        headless: false,
        executablePath:"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        //MAXIMIZE SCREEN
        defaultViewport:null,
        args:["--start-maximized"],
        // slowMo:100
    });

    //open new tab
    const tab= await browserRepresentativeObj.newPage();

    // to go google's home page
    await tab.goto("https://www.google.com");

    //to type automaticaly
    await tab.type("input[type='text']","pepcoding",{delay:200});

    //to press a specific key
    await tab.keyboard.press("Enter");

    await tab.waitForSelector(".LC20lb.MBeuO.DKV0Md",{visible:true});
    await tab.click(".LC20lb.MBeuO.DKV0Md",{delay:2000});

    
    await tab.waitForSelector('.site-nav-li',{visible:true});
    await tab.click('.site-nav-li');
    
    await tab.waitForSelector('.card',{visible:true});

    let courseDetails=await tab.evaluate(browserMeChalneWalafn);
    console.table(courseDetails);

    function browserMeChalneWalafn(){
        //gives dedails or array of coursename........
        // let elemArr=document.querySelectorAll(".card h3");
        // let courseName=[];
        // for(let i=0;i<elemArr.length;i++){
        //   courseName[i] =  elemArr[i].textContent.trim();
        // }
        // return courseName;

//gives courseName, date,features of all courses in pepcoding......
        let elemArr=document.querySelectorAll("#courses .card.course-tile.card-cs.rounded-border");
        
        
 let detailArr=[];
       for(let i=0;i<elemArr.length;i++){

        let singleCourse=elemArr[i];
        let courseNameElem=singleCourse.querySelector("h3");
        let dateElem=singleCourse.querySelector(".date");
        let featureArr=singleCourse.querySelectorAll("h5");

        let courseName=courseNameElem.textContent.trim();
        let date=dateElem.textContent.trim();
        let features="";
        for(let j=0;j<featureArr;i++){
            let cfeature=featureArr[j].textContent.trim();
            features += cfeature + "\n"
        }
        let courseObj={features,courseName,date};
       detailArr.push(courseObj);

       }
      return detailArr

    }
   // console.log(courseName);

}
fn();