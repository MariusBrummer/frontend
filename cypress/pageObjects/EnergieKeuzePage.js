import { verifyPageIsDisplayed } from '../support/utils';

class EnergieKeuzePage {

    verifyPageIsDisplayed(){
        verifyPageIsDisplayed('eneradsfasdgiekeuze'); 
    }

    clickStroomEnGasButton(){
        cy.get('button[value="electricityAndGas"]').click(); 
    }
    clickVolgendeButton(){
        cy.get('[data-label="Volgende"]').click();
    }
 

}

export default EnergieKeuzePage;
