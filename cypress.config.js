const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.eneco.nl/', // Set your base URL here
    supportFile: false

  },
});
