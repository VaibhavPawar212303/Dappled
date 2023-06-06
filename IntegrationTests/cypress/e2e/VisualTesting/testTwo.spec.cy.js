describe("Validate the orange hrm page", () => {
  it("Validate the orange hrm page", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    )
      .wait(4000)
      .toMatchImageSnapshot();
  });
});
