class Co2GasPage{
    verifyPageIsDisplayed() {
        cy.url().should('include', 'co2-gas');

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