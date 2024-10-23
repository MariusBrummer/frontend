const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.eneco.nl/', // Set your base URL here
    supportFile: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 60000, // Set default command timeout to 10 seconds
  },
});
