import HomePage from '../pageObjects/HomePage';
import EnergieKeuzePage from '../pageObjects/EnergieKeuzePage';
import VerbruikBekendPage from '../pageObjects/VerbruikBekendPage';
import VerbruikPage from '../pageObjects/VerbruikPage';
import ZonnePanelenPage from '../pageObjects/ZonnePanelenPage';
import VerhuizenPage from '../pageObjects/VerhuizenPage';
import LoopTijdPage from '../pageObjects/LoopTijdPage';
import Co2GasPage from '../pageObjects/Co1GasPage';
import OverzichtPage from '../pageObjects/OverzichtPage';
import StartLeverDatumPage from '../pageObjects/StartLeverDatumPage';
import AdresGegevensPage from '../pageObjects/AdresGegevensPage';
import PersoonlijkeGegevensPage from '../pageObjects/PersoonlijkeGegevensPage';
import ContactGegevensPage from '../pageObjects/ContactGegevensPage';

const homePage = new HomePage();
const energieKeuzePage = new EnergieKeuzePage();
const verbruikBekendPage = new VerbruikBekendPage();
const verbruikPage = new VerbruikPage();
const zonnePanelenPage = new ZonnePanelenPage();
const verhuizenPage = new VerhuizenPage();
const loopTijdPage = new LoopTijdPage();
const co2gasPage = new Co2GasPage();
const overzichtPage = new OverzichtPage();
const startLeverDatumPage = new StartLeverDatumPage();
const adresGegevensPage = new AdresGegevensPage();
const persoonlijkeGegevensPage = new PersoonlijkeGegevensPage();
const contactGegevensPage = new ContactGegevensPage();


describe('Energie aanvragen op Eneco Website', () => {
    it('Request a energie quote using postal code', () => {
        homePage.visit();  
        homePage.clickWeigerenButton();
        homePage.checkIfBerekenButtonExist();
        homePage.checkTitle('Energieleverancier Eneco - duurzame energie van iedereen');
        homePage.enterPostalCode('9713RD');
        homePage.enterHouseNumber('63');
        homePage.checkAddress('Irislaan 63, 9713RD GRONINGEN');
        homePage.clickBerekenButton();


        //TODO:  Parameterize the test data of the tests below
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
        zonnePanelenPage.clickVolgendeButton();

        verhuizenPage.verifyPageIsDisplayed();
        verhuizenPage.checkHeadingExist();
        verhuizenPage.clickNeeButton();
        verhuizenPage.clickVolgendeButton();

        loopTijdPage.verifyPageIsDisplayed();
        loopTijdPage.checkHeadingExist();
        loopTijdPage.clickVastButton();
        loopTijdPage.clickVolgendeButton();

        co2gasPage.verifyPageIsDisplayed();
        co2gasPage.checkHeadingExist();
        co2gasPage.clickUitButton();
        co2gasPage.clickNaarJeAanbodButton();

        overzichtPage.verifyPageIsDisplayed();
        overzichtPage.checkHeadingExist();
        overzichtPage.clickNaarJeGegevensButton();

        startLeverDatumPage.verifyPageIsDisplayed();
        startLeverDatumPage.checkHeadingExist();
        startLeverDatumPage.clickVolgendeButton();

        adresGegevensPage.checkHeadingExist();
        adresGegevensPage.clickJaButton();
        adresGegevensPage.clickVolgendeButton();

        persoonlijkeGegevensPage.completePersonalDetailsForm();
        persoonlijkeGegevensPage.clickVolgendeButton();

        contactGegevensPage.verifyPageIsDisplayed();
        contactGegevensPage.checkHeadingExist();
        contactGegevensPage.completeContactDetails();
        contactGegevensPage.clickControlerenButton();

        
    });
});
