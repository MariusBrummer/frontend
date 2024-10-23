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

2. Run the installation script to install all dependencies on Windows:

   ```bash
   npm install

    Currently there are no instruction on Linux and Mac.
  
## Project structure

frontend/
│
├── cypress/
│   ├── fixtures/         # Test data and mock responses
│   ├── integration/      # Test specifications
│   ├── pageObjects/      # Page object classes
│   └── support/          # Custom commands and configurations
│
├── cypress.config.js     # Cypress configuration file
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation

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

To run your tests, execute one the following commands in your terminal:

```bash
npx cypress open
npx cypress run --browser chrome --headless

```

## Reporting

After a test run an HTML report will be generated in the cypress/reports directory. The report includes information about the test results, and  screenshots if there are any failures.
