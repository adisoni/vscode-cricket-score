const webdriver = require('selenium-webdriver')
const fs = require('fs');
var builder = new webdriver.Builder().withCapabilities({'browserName': 'chrome', acceptSslCerts: true, acceptInsecureCerts: true});
let script = fs.readFileSync('cricinfo_script.js', 'utf8');
driver = builder.build()
driver.get('https://www.espncricinfo.com/series/8039/game/1144524/afghanistan-vs-west-indies-42nd-match-icc-cricket-world-cup-2019')
driver.executeScript(script)
