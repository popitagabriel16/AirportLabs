import ContactSectionPage from '../page-objects/ContactSectionPage.js';

describe('Contact Page Tests', () => {
    beforeEach(() => {
      cy.visit('/other/contact')
    })

    it('Verify that you can use Get in touch section', () => {
      cy.fixture('AirportLabsData.json').then((data) => {
        const userData = data[0];
        ContactSectionPage.fillContactForm(userData);
      });
    
      ContactSectionPage.checkCheckboxAndSubmit();
      ContactSectionPage.verifySuccessMessage();
    });
  
  })