const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.eneco.nl/',
    supportFile: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 60000,
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    reporter: 'cypress-mochawesome-reporter', // Ensure correct reporter name
    reporterOptions: {
      reportDir: 'cypress/reports/mocha', // Set reports directory
      overwrite: false, // Do not overwrite existing reports
      html: true, // Generate HTML report
      json: true, // Generate JSON report
      reportFilename: 'report', // Name of the report file
      embeddedScreenshots: true, // Embed screenshots
      inlineAssets: true, // Inline assets
    },
  },
  setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on);
  },
});
