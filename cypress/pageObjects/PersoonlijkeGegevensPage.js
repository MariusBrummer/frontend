class PersoonlijkeGegevensPage{
    verifyPageIsDisplayed() {
        cy.url().should('include', 'persoonlijke-gegevens');

    }

    checkHeadingExist(){
        cy.contains('Wat zijn je persoonlijke gegevens?').should('exist');
    }


    completePersonalDetailsForm(){
    cy.get('[data-label="Dhr."]').click();
    cy.get('input[name="firstName"]').type('Peter');
    cy.get('input[name="initials"]').type('P');
    cy.get('input[name="surnamePreposition"]').type('de');
    cy.get('input[name="surname"]').type('Vries');
    cy.get('input[name="day"]').type('20');
    cy.get('input[name="month"]').type('02');
    cy.get('input[name="year"]').type('1980');
    }

    clickVolgendeButton(){
        cy.get('[data-label="Volgende"]').click();
    }
}
export default PersoonlijkeGegevensPage;