const puppeteer=require("puppeteer");
//nearly every fun. of puppeteer returns promise

async function fn(){
    const browserRepresentativeObj=await puppeteer.launch({
        headless: false,
        //MAXIMIZE SCREEN
        defaultViewport:null,
        args:["--start-maximized"],
        // slowMo:100
    });

    //open new tab
    const tab= await browserRepresentativeObj.newPage();

    // to go google's home page
    await tab.goto("https://www.hackerrank.com/auth/login");

    //to type automaticaly
    //email
    await tab.type("input[type='text']","wijogit622@unicsite.com",{delay:50});

    //password
    await tab.type("input[type='password']","@Qwerty",{delay:50});

    //to press a specific key
    await tab.keyboard.press("Enter");

    // await tab.waitForSelector(".LC20lb.MBeuO.DKV0Md",{visible:true})
    // await tab.click(".LC20lb.MBeuO.DKV0Md",{delay:200});
}
fn();