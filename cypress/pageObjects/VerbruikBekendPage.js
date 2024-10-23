class VerbruikBekendPage {
    verifyPageIsDisplayed() {
        cy.url().should('include', '/verbruik-bekend');

    }
    checkHeadingExist(){
        cy.contains('Weet je het energieverbruik?').should('exist');
    }
    clickVulMijnVerbruikZelfInButton() {
        cy.get('[data-label="Ja, ik vul mijn verbruik zelf in"]').click();
    }

    clickVolgendeButton(){
        cy.get('[data-label="Volgende"]').click();

}

}

export default VerbruikBekendPage;
