class AdresGegevensPage{
    verifyPageIsDisplayed() {
        cy.url().should('include', 'adresgegevens');

    }

    checkHeadingExist(){
        cy.contains('Woon of werk je op dit adres?').should('exist');
    }

    clickJaButton(){
        cy.get('[data-label="Ja"]').click();
    }

    clickVolgendeButton(){
        cy.get('[data-label="Volgende"]').click();
    }
}

export default AdresGegevensPage;