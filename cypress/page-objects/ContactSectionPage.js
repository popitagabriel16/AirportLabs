class ContactSectionPage {
  constructor() {
    this.nameInput = "#Your-Name";
    this.companyInput = "#Company-Name";
    this.emailInput = "#email";
    this.contactNumberInput = "#Contact-Number";
    this.messageInput = "#Message";
    this.checkbox = "input[type='checkbox']";
    this.submitButton = "input[type='submit']";
    this.successMessage = ".form-success.w-form-done";
  }

  fillContactForm(userData) {
    cy.get(this.nameInput, { timeout: 20000 }).type(userData.Name);
    cy.get(this.companyInput, { timeout: 20000 }).type(userData.Company);
    cy.get(this.emailInput, { timeout: 20000 }).type(userData.Mail);
    cy.get(this.contactNumberInput, { timeout: 20000 }).type(userData.phoneNumber);
    cy.get(this.messageInput, { timeout: 20000 }).type(userData.Message);
  }

  checkCheckboxAndSubmit() {
    cy.get(this.checkbox, { timeout: 20000 }).click({ force: true });
    cy.get(this.submitButton, { timeout: 20000 }).eq(0).click();
  }

  verifySuccessMessage() {
    cy.get(this.successMessage, { timeout: 20000 }).scrollIntoView();
    cy.get(this.successMessage, { timeout: 20000 }).should('include.text', "Thanks for getting in contact with us!");
  }
}

export default new ContactSectionPage();