class EnergieKeuzePage {
    verifyPageIsDisplayed() {
        cy.url().should('include', '/energiekeuze'); // Adjust according to the actual URL
        
    }
    clickStroomEnGasButton(){
        cy.get('button[value="electricityAndGas"]').click(); 
    }
    clickVolgendeButton(){
        cy.get('[data-label="Volgende"]').click();
    }
 

}

export default EnergieKeuzePage;
