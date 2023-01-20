describe("test grammarly funtionalities", () => {
  it("should verify chrome extension is installed", () => {
    cy.verifyChromeExt();
  });

  it("should check spelling error with incorrect english word", () => {
    cy.openNewDocument();
    cy.enterText("this a random text to validte correctness");
    cy.verifyCorrectness();
  });

  it("should check spelling error with non-english word", () => {
    cy.openNewDocument();
    cy.enterText("Me gusta ir al museo");
    cy.verifyCorrectness();
  });
});
