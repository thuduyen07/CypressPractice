const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://www.behance.net",
    "specPattern": "./cypress/tests/behance/**.*" ,
    "defaultCommandTimeout": 3000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'edge') {
          launchOptions.args.push('--incognito');
        }
        if (browser.name === 'firefox') {
          launchOptions.args.push('-private');
        }
        return launchOptions;
      });
    },
  },
});
