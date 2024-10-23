class ZonnePanelenPage {
    verifyPageIsDisplayed() {
        cy.url().should('include', 'zonnepanelen');

    }

    checkHeadingExist(){
        cy.contains('Heb je zonnepanelen?').should('exist');
    }

    clickNeeButton() {
        cy.get('[data-label="Nee, ik wek zelf geen stroom op"]').click();
    }

    clickVolgendeButton(){
        cy.get('[data-label="Volgende"]').click();


}
}
export default ZonnePanelenPage;