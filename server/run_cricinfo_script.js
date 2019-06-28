const webdriver = require('selenium-webdriver')
var builder = new webdriver.Builder().withCapabilities({'browserName': 'firefox', acceptSslCerts: true, acceptInsecureCerts: true});
driver = builder.build()
driver.get('https://www.espncricinfo.com/series/8039/game/1144514/england-vs-australia-32nd-match-icc-cricket-world-cup-2019')
