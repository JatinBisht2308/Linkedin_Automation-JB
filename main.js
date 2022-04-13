const puppet = require("puppeteer");
const credential = [`jatinbishtcodes2308@gmail.com`,`jatinbisht2308`];
let browserOpenPromise = puppet.launch({
    headless: false,
    defaultViewport: false,
    args: ["--start-fullscreen"],
    // args: ["--force"]
  });

  browserOpenPromise.then(function (browser) {
      console.log("Browser is opened");
    //   adding page to the browserOpenPromise
    let pagesArrayPromise = browser.pages();
    return pagesArrayPromise;
  }).then(function (allPages) {
      currentPage = allPages[0];
      console.log("New Tab is created");
      let linkedinHomePagePromise = currentPage.goto("https://www.linkedin.com/home");
      return linkedinHomePagePromise;
  })
  .then (function () {
    console.log("Opened Linkedin Home Page!!!!");
    // Wait for 2 sec then click using time out function
    setTimeout(function () {},2000);
    // Now click on the login button
    let clickOnLginPromise = currentPage.click("a[class='nav__button-secondary']");
    return clickOnLginPromise;
  })
  .then (function () {
      console.log("Clicked on login button!!!");
    //   Now its time to type inside the user name 
    let userNameTypedPromise = currentPage.type("input[id='username']",credential[0], {delay: 100});
    return userNameTypedPromise;
  }).then (function () {
      console.log("Username is typed!!!!");
    //   Now its time to type the password
    let passwordIsTypedPromise = currentPage.type("input[id='password']",credential[1],{delay:50});
    return passwordIsTypedPromise;
  })
  .then(function(){
      console.log("Password is typed!!!!!");
  })