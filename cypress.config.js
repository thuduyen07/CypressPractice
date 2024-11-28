const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    "baseUrl": "https://demoqa.com",
    "specPattern": "./cypress/tests/**.*" ,
    "defaultCommandTimeout": 40,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  "projectId": 's9jp81',
  video: true,
  videoCompression: true,
});
