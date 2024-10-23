import { verifyPageIsDisplayed } from '../support/utils';

class Co2GasPage{
    verifyPageIsDisplayed(){
        verifyPageIsDisplayed('co2-gas'); 
    }

    checkHeadingExist(){
        cy.contains('Help je mee CO2 te verminderen?').should('exist');
    }

    clickUitButton() {
        cy.get('.c-iVMvQE').click();
    }

    clickNaarJeAanbodButton() {
        cy.get('[data-label="Naar je aanbod"]').click();
    }

}

export default Co2GasPage;