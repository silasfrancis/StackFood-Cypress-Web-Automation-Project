const { defineConfig } = require("cypress");



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
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

});
