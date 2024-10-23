import { verifyPageIsDisplayed } from '../support/utils';

class OverzichtPage{

        verifyPageIsDisplayed(){
        verifyPageIsDisplayed('overzicht'); 
    }

    checkHeadingExist(){
        cy.contains('Je aanbod').should('exist');
    }

    clickNaarJeGegevensButton() {
        cy.get('[data-label="Naar je gegevens"]').click();
    }


}

export default OverzichtPage;