describe('Contact Page Tests', () => {
    beforeEach(() => {
      cy.visit('/other/contact')
    })

    it('Verify that you can use Get in touch section', () => {
      cy.fixture('AirportLabsData.json').then((data) => {
        const userData = data[0]; // Assuming you have a single set of data
    
        cy.get("#Your-Name", { timeout: 20000 }).type(userData.Name);
        cy.get("#Company-Name", { timeout: 20000 }).type(userData.Company);
        cy.get("#email", { timeout: 20000 }).type(userData.Mail);
        cy.get("#Contact-Number", { timeout: 20000 }).type(userData.phoneNumber);
        cy.get("#Message", { timeout: 20000 }).type(userData.Message);
      });
      

      cy.get("input[type='checkbox']", {timeout:20000}).click({ force: true });
      cy.get("input[type='submit']", {timeout:20000}).eq(0).click();
      cy.get(".form-success.w-form-done", {timeout:20000}, {timeout:20000}).scrollIntoView();
      cy.get(".form-success.w-form-done", {timeout:20000}).should('include.text', "Thanks for getting in contact with us!");
    })
  
  
  })