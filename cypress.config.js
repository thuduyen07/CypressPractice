const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "projectId": "CypressPractice",
  "specPattern": "./cypress/tests/**.*" ,
  "baseUrl": "https://demoqa.com",
});
