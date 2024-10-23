import { verifyPageIsDisplayed } from '../support/utils';

class VerhuizenPage{
    
    verifyPageIsDisplayed(){
        verifyPageIsDisplayed('verhuizen'); 
    }

    checkHeadingExist(){
        cy.contains('Ga je verhuizen?').should('exist');
    }

    clickNeeButton(){
        cy.get('[data-label="Nee, ik ga niet verhuizen"]').click();
    }

    clickVolgendeButton(){
        cy.wait(2000);
        cy.get('[data-label="Volgende"]').click();

    }


}

export default VerhuizenPage;