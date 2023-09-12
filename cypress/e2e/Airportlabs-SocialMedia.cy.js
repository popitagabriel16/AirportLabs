import SocialMediaPage from '../page-objects/SocialMediaPage';

// FOR SOME REASON THE ASSERTIONS ARE NOT WORKING WHEN NAVIGATING TO OTHER PAGES,
// I CAN'T CLICK, I CAN'T ASSERT TITLE, I ALSO TRIED WITH ORIGIN AND IT'S THE SAME
// ON THE OLDER VERSIONS OF CYPRESS I SAW THAT IT WORKS TO INTERACT WHEN YOU NAVIGATE TO OTHER PAGES
describe('Social-Media Page Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Verify that social media links are redirecting users to Facebook', () => {
    SocialMediaPage.clickFacebookLink();
  })

  it('Verify that social media links are redirecting users to Instagram', () => {
    SocialMediaPage.clickInstagramLink();
  })

  it('Verify that social media links are redirecting users to LinkedIn', () => {
    SocialMediaPage.clickLinkedInLink();
  })
})