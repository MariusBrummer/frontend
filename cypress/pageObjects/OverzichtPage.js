class OverzichtPage{
    verifyPageIsDisplayed() {
        cy.url().should('include', 'overzicht');

    }

    checkHeadingExist(){
        cy.contains('Je aanbod').should('exist');
    }

    clickNaarJeGegevensButton() {
        cy.get('[data-label="Naar je gegevens"]').click();
    }


}

export default OverzichtPage;