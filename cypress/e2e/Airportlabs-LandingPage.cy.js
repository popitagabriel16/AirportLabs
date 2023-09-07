describe('Landing Page Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Verify that the title from a section of your choosing from the landing page is correct', () => {
    cy.get('#w-dropdown-toggle-0', {timeout:20000}).should('have.text', 'Products');
    cy.get('#w-dropdown-toggle-0', {timeout:20000}).should('css', 'font-size').should('eq', '16px');
    cy.get('#w-dropdown-toggle-0', {timeout:20000}).should('css', 'color').should('eq', 'rgb(255, 255, 255)');
  })

  it('Verify that the statistic from the Our Activity in numbers section from the landing page is correct', () => {
    let activityTab = ".h2.green";

    cy.get(activityTab).eq(0).scrollIntoView();
    
    cy.get(activityTab, {timeout:20000}).eq(0).should('have.text', '200k');
    cy.get(activityTab, {timeout:20000}).eq(1).should('have.text', '2.500');
    cy.get(activityTab, {timeout:20000}).eq(2).should('have.text', '99.99%');
    cy.get(activityTab, {timeout:20000}).eq(3).should('have.text', '10+ mil.');
  })

  it('Verify that an image with the AirportLabs logo exists', () => {
    const imageUrl = 'https://uploads-ssl.webflow.com/621780e23ce4730dbde38ef2/6218c570693ffd35d9005f03_AL_Logo_White_Horizontal.svg';

    // Load the image without displaying it
    cy.request(imageUrl).as('imageData');

    cy.get('@imageData').then((response) => {
    // Assertions
    expect(response.status).to.equal(200); // Check if the image loads successfully
    expect(response.headers['content-type']).to.include('image'); // Check if the response is an image

    // Use Cypress commands to get the image element and assert dimensions
    cy.get('img[src="' + imageUrl + '"]').should('be.visible').and(($img) => {

    const naturalWidth = $img[0].naturalWidth; // Get the image's natural width
    const naturalHeight = $img[0].naturalHeight; // Get the image's natural height

    // Assertions for dimensions (update with the expected values)
    expect(naturalWidth).to.equal(300); 
    expect(naturalHeight).to.equal(85);
    })
   })
  })

})