// cypress/support/utils.js
export const verifyPageIsDisplayed = (urlFragment) => {
    cy.url().should('include', urlFragment);
};
