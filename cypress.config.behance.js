const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    "baseUrl": "https://www.behance.net",
    "specPattern": "./cypress/tests/behance/**.*" ,
    "defaultCommandTimeout": 3000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  "projectId": 's9jp81',
  video: true,
  videoCompression: true,
});
