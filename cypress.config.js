const { defineConfig } = require("cypress");



module.exports = defineConfig({
  env:{
    applicationURL : "https://stackfood-admin.6amtech.com/login/restaurant",
    username: "test.restaurant@gmail.com",
    password : "12345678"
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
