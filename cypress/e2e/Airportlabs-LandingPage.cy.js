import LandingPage from '../page-objects/LandingPage.js';

describe('Landing Page Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Verify that the title from a section of your choosing from the landing page is correct', () => {
    LandingPage.verifySectionTitle();
    LandingPage.verifySectionStyles();
  });

  it('Verify that the statistic from the Our Activity in numbers section from the landing page is correct', () => {
    LandingPage.verifyOurActivityStats();
  });

  it('Verify that an image with the AirportLabs logo exists', () => {
    LandingPage.verifyAirportLabsLogo();
  });
});