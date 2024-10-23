class LoopTijdPage {
    verifyPageIsDisplayed() {
        cy.url().should('include', 'looptijd');
    }

    checkHeadingExist(){
        cy.contains('Kies je type energiecontract').should('exist');
    }

    clickVastButton() {
        cy.get('[data-label="Vast"]').click();
    }

    click1JaarButton() {
        cy.get('[data-label="1 jaar stroom en gas"]').click();
    }   

    clickVolgendeButton(){
        cy.get('[data-label="Volgende"]').click();
    }



}
export default LoopTijdPage;