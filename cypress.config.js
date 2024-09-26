const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  //reporter: 'reporters/custom.js',
  reporter: 'mochawesome',
 "reporterOptions": {
    "reportDir": "cypress/reports/html",
    "overwrite": false,
    "html": false,
    "json": true
  },

  env:{
    applicationURL : "https://stackfood-admin.6amtech.com/login/restaurant",
    username: "test.restaurant@gmail.com",
    password : "12345678"
  },
  
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      require('cypress-mochawesome-reporter/plugin')(on);
      on("file:preprocessor", cucumber());
   },
  },

});
