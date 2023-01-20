const email = Cypress.env("EMAIL");
const password = Cypress.env("PASSWORD");

Cypress.Commands.add("login", () => {
  cy.fixture("elements").then((el) => {
    cy.visit("/");
    cy.get(el.landing_page_login_button).should("be.visible").click();
    cy.get(el.email_field).should("be.visible").type(email);
    cy.get(el.login_button).should("be.visible").click();
    cy.get(el.password_field).should("be.visible").type(password);
    cy.get(el.login_button).should("be.visible").click();
  });
});

Cypress.Commands.add("verifyChromeExt", () => {
  cy.fixture("elements").then((el) => {
    cy.get(el.apps_menu).should("be.visible").click();
    cy.get(el.chrome_ext_section).should("be.visible");
    cy.get(el.chrome_ext_active)
      .should("be.visible")
      .should("contain", "Active");
  });
});

Cypress.Commands.add("openNewDocument", () => {
  cy.fixture("elements").then((el) => {
    cy.get(el.my_grammarly_menu).should("be.visible").click();
    cy.get(el.new_doc_button).should("be.visible").click();
  });
});

Cypress.Commands.add("enterText", (Sentence) => {
  cy.fixture("elements").then((el) => {
    cy.get(el.text_editor).should("be.visible").type(Sentence);
  });
});

Cypress.Commands.add("verifyCorrectness", (errorSentence) => {
  cy.fixture("elements").then((el) => {
    // Extracts text form the first error text
    let text, suggestion;
    cy.get(el.error_text).should(($error) => {
      text = $error.text();
    });
    // Extracts text from the suggestion pane
    cy.get(el.suggestions_pane).should(($suggestion) => {
      suggestion = $suggestion.text();
      // Compares both extracted texts
      expect(suggestion).to.include(text);
    });
    cy.get(el.correction_text).should("be.visible");
  });
});

