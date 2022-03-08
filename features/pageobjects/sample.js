// const webdriver = require('selenium-webdriver');
// const fs = require('fs')

// // Input capabilities
// const capabilities = {
//   'browserName': 'chrome',
//   'browserVersion': 'latest',
//   'os': 'windows',
//   'os_version': '10',
//   'build': 'Accessibility Test Sample Build',
//   'name': 'Accessibility test - Google'
// }
// async function runAccessibilityTest () {
//   let driver = new webdriver.Builder()
//     .usingServer('http://keerthirapolu_HfC2GY:tGSBbqXTQsa96i9BhLMu@hub-cloud.browserstack.com/wd/hub')
//     .withCapabilities(capabilities)
//     .build();
//   await driver.get("http://www.google.com");
//   const data = await fs.readFileSync('path/to/axe.min.js', 'utf8')
//   await driver.executeScript(data.toString());
//   let result = await driver.executeAsyncScript('var callback = arguments[arguments.length - 1];axe.run().then(results => callback(results))');
//   await fs.writeFileSync('path/to/report.json', JSON.stringify(result));
//   await driver.quit();
// }
// runAccessibilityTest();