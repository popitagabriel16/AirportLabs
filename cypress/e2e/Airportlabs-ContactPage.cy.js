describe('Contact Page Tests', () => {
    beforeEach(() => {
      cy.visit('/other/contact')
    })

    it('Verify that you can use Get in touch section', () => {
        cy.get("#Your-Name").type("Gabriel Popita");
        cy.get("#Company-Name").type("Airportlabs");
        cy.get("#email").type("testmail@gmail.com");
        cy.get("#Contact-Number").type("0741434669");
        cy.get("#Message").type("This is a test message.");
        cy.get("input[type='checkbox']").click({ force: true });
        cy.get("input[type='submit']").eq(0).click();

        cy.get(".form-success.w-form-done", {timeout:20000}).scrollIntoView();
        cy.get(".form-success.w-form-done").should('include.text', "Thanks for getting in contact with us!");
    })
  
  
  })