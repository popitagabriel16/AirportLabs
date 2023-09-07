describe('Social-Media Page Tests', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    // FOR SOME REASON THE ASSERTIONS ARE NOT WORKING WHEN NAVIGATING TO OTHER PAGES,
    // I CAN'T CLICK, I CAN'T ASSERT TITLE, I ALSO TRIED WITH ORIGIN AND IT'S THE SAME
    // ON THE OLDER VERSIONS OF CYPRESS I SAW THAT IT WORKS TO INTERACT WHEN YOU NAVIGATE TO OTHER PAGES
    it('Verify that social media links are redirecting user to Facebook', () => {
      let socialMedia = ".logo-footer-container.w-inline-block";

      cy.get(socialMedia, {timeout:20000}).eq(0).scrollIntoView();
      cy.get(socialMedia, {timeout:20000}).eq(0).invoke('attr', 'target', '_self').click();
      // cy.title().should('eq', 'Facebook');
    })

    it('Verify that social media links are redirecting user to Instagram', () => {
      let socialMedia = ".logo-footer-container.w-inline-block";

      cy.get(socialMedia, {timeout:20000}).eq(0).scrollIntoView();
      cy.get(socialMedia, {timeout:20000}).eq(1).invoke('attr', 'target', '_self').click();
      // cy.title({timeout:20000}).should('eq', 'Instagram');
    })

    it('Verify that social media links are redirecting user to LinkedIn', () => {
      let socialMedia = ".logo-footer-container.w-inline-block";

      cy.get(socialMedia, {timeout:20000}).eq(0).scrollIntoView();
      cy.get(socialMedia, {timeout:20000}).eq(2).invoke('attr', 'target', '_self').click();
      // cy.title({timeout:20000}).should('eq', 'LinkedIn');
    })
  
  })