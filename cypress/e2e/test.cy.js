import HomePage from '../pageObjects/HomePage';
import EnergieKeuzePage from '../pageObjects/EnergieKeuzePage';
import VerbruikBekendPage from '../pageObjects/VerbruikBekendPage';
import VerbruikPage from '../pageObjects/VerbruikPage';
import ZonnePanelenPage from '../pageObjects/ZonnePanelenPage';

const homePage = new HomePage();
const energieKeuzePage = new EnergieKeuzePage();
const verbruikBekendPage = new VerbruikBekendPage();
const verbruikPage = new VerbruikPage();
const zonnePanelenPage = new ZonnePanelenPage();

describe('Energie aanvragen on Eneco Website', () => {
    it('Request a energie quote using postal code', () => {
        homePage.visit();  
        homePage.clickWeigerenButton();
        homePage.checkIfBerekenButtonExist();
        homePage.checkTitle('Energieleverancier Eneco - duurzame energie van iedereen'); // Adjust the expected title
        homePage.enterPostalCode('9713RD');
        homePage.enterHouseNumber('63');
        homePage.clickBerekenButton();
        energieKeuzePage.verifyPageIsDisplayed();
        energieKeuzePage.clickStroomEnGasButton();
        energieKeuzePage.clickVolgendeButton();
        verbruikBekendPage.verifyPageIsDisplayed();
        verbruikBekendPage.checkHeadingExist();
        verbruikBekendPage.clickVulMijnVerbruikZelfInButton();
        verbruikBekendPage.clickVolgendeButton();
        verbruikPage.verifyPageIsDisplayed();
        verbruikPage.checkHeadingExist();
        verbruikPage.enterUsage();
        verbruikPage.clickVolgendeButton();
        zonnePanelenPage.verifyPageIsDisplayed();
        zonnePanelenPage.checkHeadingExist();
        zonnePanelenPage.clickNeeButton();
    });
});
