const puppet = require("puppeteer");
const credential = [`jatinbishtcodes2308@gmail.com`,`jatin2308`];
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
    let userNameTypedPromise = currentPage.type("input[id='username']",credential[0], {delay: 300});
    return userNameTypedPromise;
  }).then (function () {
      console.log("Username is typed!!!!");
    //   Now its time to type the password
    let passwordIsTypedPromise = currentPage.type("input[id='password']",credential[1],{delay:200});
    return passwordIsTypedPromise;
  })
  .then(function(){
      console.log("Password is typed!!!!!");
    //   Now its time to click on sign button
    setTimeout(function () {},2000);
    let clickOnSignPromise = currentPage.click("button[class='btn__primary--large from__button--floating']");
    return clickOnSignPromise;
  })
  .then(function (){
      console.log("Successfully signed in linkedin!!!!");
    //   setTimeout(function () {},6000);
    //   Now lets move to your profile page
    let movedToProfilePagePromise = currentPage.click("a[id='ember605']");
    return movedToProfilePagePromise;
  })
//   .then (function () {
//       console.log("Moved to profile page succesfully!!!!!!");

//   })