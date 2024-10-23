const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.eneco.nl/',
    supportFile: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 60000,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports', 
      overwrite: false, 
      html: true, 
      json: true, 
      reportFilename: 'report.html', 
      embeddedScreenshots: true, 
      inlineAssets: true,
    },
  },
  setupNodeEvents(on, config) {
     },
});

