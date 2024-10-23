# Cypress Page Object Model Project

## Overview

This project is a Cypress-based test automation framework that implements the Page Object Model (POM) design pattern. The POM helps to organize test scripts and reduce code duplication by encapsulating page interactions in reusable classes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed (version 14 or above)
- [Cypress](https://www.cypress.io/) installed

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MariusBrummer/frontend.git
   cd frontend
Install dependencies:
bash

npm install
Project Structure
bash

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
Page Objects
In the cypress/pageObjects directory, you will find classes that represent different pages of the application. Each class contains methods for interacting with the elements on that page.

Example: HomePage
javascript
Copy code
class HomePage {
    visit() {
        cy.visit('https://www.eneco.nl/');
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
Running Tests
To run your tests, execute the following command in your terminal:

bash

npx cypress open
This will open the Cypress Test Runner. You can then select and run your test files.

Writing Tests
Tests are located in the cypress/integration directory. You can create new test files and use the page objects for cleaner and more maintainable tests.

Example Test
javascript

import HomePage from '../pageObjects/HomePage';

describe('Eneco Website', () => {
    const homePage = new HomePage();

    it('should request a quote using postal code', () => {
        homePage.visit();
        homePage.enterPostalCode('9713RD');
        homePage.enterHouseNumber('63');
        homePage.clickBerekenButton();
        // Add assertions here
    });
});
Documentation
For more information on Cypress, visit the Cypress Documentation.

Contributing
Contributions are welcome! Please submit a pull request for any changes you make.

License
This project is licensed under the MIT License.

bash
Copy code

This should provide a comprehensive overview of your project and help others understand how to set it up
