const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.eneco.nl/',
    supportFile: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 60000,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports', // Where reports will be saved
      overwrite: false, // Do not overwrite reports
      html: true, // Generate HTML report
      json: true, // Generate JSON report
      reportFilename: 'report', // Filename for the report (without extension)
      embeddedScreenshots: true, // Embed screenshots in the report
      inlineAssets: true, // Inline assets in the report
    },
  },
  setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on); // Add reporter plugin
  },
});
