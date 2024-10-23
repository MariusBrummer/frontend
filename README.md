# Cypress Page Object Model Project

## Overview

This project is a Cypress-based test automation framework that implements the Page Object Model (POM) design pattern. The POM helps to organize test scripts and reduce code duplication by encapsulating page interactions in reusable classes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed (version 18 or above)
- [Cypress](https://www.cypress.io/) installed

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MariusBrummer/frontend.git
   cd frontend

2. Run the installation script to install all dependencies on Windows. There are not installation scripts for Mac and Linux:

   ```bash
   npm install
    
## Project structure
```
frontend/
│
├── cypress/
|   ├── e2e/              # Test scripts
│   ├── fixtures/         # Test data and mock responses
│   ├── integration/      # Test specifications
│   ├── pageObjects/      # Page object classes
|   ├── plugins/          # Custom plugins 
│   ├── reports/          # Test reports
│   └── support/          # Custom commands and configurations
│   └── videos/           # Video recording of test run
│
├── cypress.config.js     # Cypress configuration file
├── install.bat           # Installation script for Windows
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation

```
## Page Objects

In the cypress/pageObjects directory, you will find classes that represent different pages of the application. Each class contains methods for interacting with the elements on that page.

## Example: HomePage

```javascript
class HomePage {
    visit() {
        cy.visit('<https://www.eneco.nl/>');
    }

    enterPostalCode(postalCode) {
        cy.get('input[name="postalCode"]').type(postalCode);
    }

    enterHouseNumber(houseNumber) {
        cy.get('[data-cy=house-number-input]').type(houseNumber);
    }

    clickBerekenButton() {
        cy.get('[data-cy=bereken-button]').click();
    }
}

export default HomePage;
```

## Running Test

To run your tests, execute the following command in your terminal:

```bash
npm run test

```

## Running Tests in Cypress GUI

To run your tests in Cypress GUI execute the following command in your terminal:

```bash
npx open cypress

```

## Reporting

After a test run an HTML report will be generated in the cypress/reports/mochareports directory. The report includes information about the test results, and screenshots if there are any failures.

A video recording of the test run will be saved in the cypress/videos directory.
