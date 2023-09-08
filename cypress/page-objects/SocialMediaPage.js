class SocialMediaPage {
    clickFacebookLink() {
      const socialMediaLinks = ".logo-footer-container.w-inline-block";
      cy.get(socialMediaLinks, { timeout: 20000 }).eq(0).scrollIntoView();
      cy.get(socialMediaLinks, { timeout: 20000 }).eq(0).invoke('attr', 'target', '_self').click();
      // cy.title().should('eq', 'Facebook');
    }
  
    clickInstagramLink() {
      const socialMediaLinks = ".logo-footer-container.w-inline-block";
      cy.get(socialMediaLinks, { timeout: 20000 }).eq(0).scrollIntoView();
      cy.get(socialMediaLinks, { timeout: 20000 }).eq(1).invoke('attr', 'target', '_self').click();
      // cy.title().should('eq', 'Instagram');
    }
  
    clickLinkedInLink() {
      const socialMediaLinks = ".logo-footer-container.w-inline-block";
      cy.get(socialMediaLinks, { timeout: 20000 }).eq(0).scrollIntoView();
      cy.get(socialMediaLinks, { timeout: 20000 }).eq(2).invoke('attr', 'target', '_self').click();
      // cy.title().should('eq', 'LinkedIn');
    }
  }
  
  export default new SocialMediaPage();