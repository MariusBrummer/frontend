import { verifyPageIsDisplayed } from '../support/utils';

class EnergieKeuzePage {

    verifyPageIsDisplayed(){
        verifyPageIsDisplayed('energiekeuze'); 
    }

    clickStroomEnGasButton(){
        cy.get('button[value="electricityAndGas"]').click(); 
    }
    clickVolgendeButton(){
        cy.get('[data-label="Volgende"]').click();
    }
 

}

export default EnergieKeuzePage;
