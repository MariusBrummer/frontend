import { verifyPageIsDisplayed } from '../support/utils';

class ContactGegevensPage{
    verifyPageIsDisplayed(){
        verifyPageIsDisplayed('contactgegevens'); 
    }

    checkHeadingExist(){
        cy.contains('Hoe kunnen we je bereiken?').should('exist');
    }

    completeContactDetails(){
        cy.get('input[name="phoneNumber"]').type('0612345678');
        cy.get('input[name="emailAddress"]').type('test@email.nl');
    }

    clickControlerenButton(){
        cy.get('[data-label="Controleer je bestelling"]').click();
    }

}


export default ContactGegevensPage;