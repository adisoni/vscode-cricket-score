const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const fs = require('fs');
var builder = new webdriver.Builder().withCapabilities({'browserName': 'chrome', acceptSslCerts: true, acceptInsecureCerts: true});
let script = fs.readFileSync('cricinfo_script.js', 'utf8');
const screen = {
    width: 640,
    height: 480
  };
driver = builder.setChromeOptions(new chrome.Options().headless().windowSize(screen)).build()
driver.get(process.argv[2])
driver.executeScript(script)
