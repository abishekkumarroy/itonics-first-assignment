class LoginPage {
  enterURL() {
    cy.visit("https://www.youtube.com/");
    cy.wait(7000)
  }

  clickSignInLink() {
    cy.get('[placeholder="Search"]').eq(0).click();
       return this;
  }

  enterEmailPassword(username) {
    cy.get('[placeholder="Search"]').eq(0).type(username);
    cy.get('[aria-label="Search"]').eq(0).click();
    cy.wait(4000);
    cy.get('[class="text-wrapper style-scope ytd-video-renderer"]').eq(0).click();
    return this;
  }
  
  verifyPageTitle() {
    cy.wait(3000);
    return cy.url().should("eq", "https://www.youtube.com/watch?v=bG_774HQa-E");
    cy.wait(5000);
  }

  verifyUserLoggedIn() {
  // Capture the video title, click the video, and verify the title on the detail page
  cy.get('[class="details style-scope ytd-compact-video-renderer"]')  // Select all video elements
  .eq(1)  // Select the second video (index starts from 0)
  .invoke('text')  // Get the text of the video
  .then((videoTitle) => {
    // Store the video title and ensure no extra spaces are in it
    const expectedTitle = videoTitle.trim();

    // Scroll the video into view and click it
    cy.get('[class="details style-scope ytd-compact-video-renderer"]')
      .eq(1)
      .scrollIntoView()
      .click();

    // Now on the video detail page, assert that the page title matches the expected title
    // This assumes the page title is the same as the video title.
    cy.title().should('include', expectedTitle);
    cy.wait(5000);

  });
  

  
  
  }



  }
  const login = new LoginPage();
  export default login;