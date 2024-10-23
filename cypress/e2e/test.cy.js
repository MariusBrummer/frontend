import HomePage from '../pageObjects/HomePage';
import EnergieKeuzePage from '../pageObjects/EnergieKeuzePage';

const homePage = new HomePage();
const energieKeuzePage = new EnergieKeuzePage();

describe('Energie aanvragen on Eneco Website', () => {
    it('Request a energie quote using postal code', () => {
        homePage.visit();
        homePage.clickWeigerenButton();
        homePage.enterPostalCode('9713RD');
        homePage.enterHouseNumber('63');
        homePage.clickBerekenButton();
        energieKeuzePage.verifyPageIsDisplayed();
        energieKeuzePage.clickStroomEnGasButton();
        energieKeuzePage.clickVolgendeButton();
        energieKeuzePage.checkHeadingExist();
    });
});
