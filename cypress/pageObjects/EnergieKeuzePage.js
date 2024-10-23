class EnergieKeuzePage {
    verifyPageIsDisplayed() {
        cy.url().should('include', '/energiekeuze'); // Adjust according to the actual URL
        
    }
    clickStroomEnGasButton(){
        cy.wait(3000);
        cy.get('button[value="electricityAndGas"]').click(); 
    }
    clickVolgendeButton(){
        cy.get('[data-label="Volgende"]').click();
    }
    checkHeadingExist(){
        cy.contains('Weet je het energieverbruik?').should('exist');
    }

}

export default EnergieKeuzePage;
