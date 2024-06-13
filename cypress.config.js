const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");


module.exports = defineConfig({

  e2e: {
    viewportHeight: 900,
    viewportWidth: 1440,
    screenshotOnRunFailure : true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    //specPattern: 'cypress/e2e/*.{js,jsx,ts,tsx}',
    pageLoadTimeout: 500000,
    env: {
      baseURL: 'https://ecommerce-playground.lambdatest.io',
      username: 'qualitysavior@gmail.com',
      password: '',
      allureReuseAfterSpec: true,
      allureResultPath: "allure-results",
    }
  },
});
