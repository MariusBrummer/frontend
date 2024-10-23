import { verifyPageIsDisplayed } from '../support/utils';

class VerbruikPage{
    verifyPageIsDisplayed(){
        verifyPageIsDisplayed('verbruik'); 
    }
    checkHeadingExist(){
        cy.contains('Wat is je verbruik?').should('exist');
    }

    enterUsage() {
        cy.get('input[name="usageElectricityHigh"]').type('1234');
        cy.get('input[name="usageElectricityLow"]').type('2222');
        cy.get('input[name="usageGas"]').type('3456');
    }

    clickVolgendeButton(){
        cy.get('[data-label="Volgende"]').click();

}




}

export default VerbruikPage;