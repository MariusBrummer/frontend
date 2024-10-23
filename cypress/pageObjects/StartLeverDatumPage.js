import { verifyPageIsDisplayed } from '../support/utils';

class StartLeverDatumPage {
    
    verifyPageIsDisplayed(){
        verifyPageIsDisplayed('je-gegevens'); 
    }

    checkHeadingExist(){
        cy.contains('Vanaf wanneer wil je energie ontvangen?').should('exist');
    }

    clickVolgendeButton(){
        cy.get('[data-label="Volgende"]').click();

    }   

}

export default StartLeverDatumPage;