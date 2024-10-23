import { verifyPageIsDisplayed } from '../support/utils';

class HomePage {
    visit() {
        cy.visit('https://www.eneco.nl/'); 
    }

    verifyPageIsDisplayed(){
        verifyPageIsDisplayed('eneco'); 
    }

    checkTitle(expectedTitle) {
        cy.title().should('eq', expectedTitle); 
    }

    checkIfBerekenButtonExist(){
        cy.get('.sparky-button > .d0i1vy0').should('exist');
    }

    clickWeigerenButton() {
        cy.get('[data-label="Weigeren"]').click();
    }

    enterPostalCode(postalCode) {
        // Use the name attribute to select the input field
        cy.get('input[name="postalCode"]').type(postalCode); // Adjust selector as needed
    }

    enterHouseNumber(houseNumber) {
        cy.get('input[name="houseNumber"]').type(houseNumber);
        cy.wait(1000); // Adjust selector as needed
    }


    clickBerekenButton() {
        cy.get('.sparky-button > .d0i1vy0').click(); // Adjust selector as needed
        
    }
}

export default HomePage;

