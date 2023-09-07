describe('Contact Page Tests', () => {
    beforeEach(() => {
      cy.visit('/other/contact')
    })

    it('Verify that you can use Get in touch section', () => {
        cy.get("#Your-Name", {timeout:20000}).type("Gabriel Popita");
        cy.get("#Company-Name", {timeout:20000}).type("Airportlabs");
        cy.get("#email", {timeout:20000}).type("testmail@gmail.com");
        cy.get("#Contact-Number", {timeout:20000}).type("0741434669");
        cy.get("#Message", {timeout:20000}).type("This is a test message.");
        cy.get("input[type='checkbox']", {timeout:20000}).click({ force: true });
        cy.get("input[type='submit']", {timeout:20000}).eq(0).click();

        cy.get(".form-success.w-form-done", {timeout:20000}, {timeout:20000}).scrollIntoView();
        cy.get(".form-success.w-form-done", {timeout:20000}).should('include.text', "Thanks for getting in contact with us!");
    })
  
  
  })