const puppet = require("puppeteer");

let browserOpenPromise = puppet.launch({
    headless: false,
    defaultViewport: false,
    args: ["--start-fullscreen"],
    // args: ["--force"]
  });

  browserOpenPromise.then(function () {
      console.log("Browser is opened");
  })