describe("Validate the google page", () => {
  it("Validate the google page", () => {
    cy.visit("/").toMatchImageSnapshot();   
  });
});
