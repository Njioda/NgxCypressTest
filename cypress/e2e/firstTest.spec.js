/// <reference types="cypress" />

import { Input } from "@angular/core";

describe("First test suite", () => {
  it("first test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    // by tag name
    cy.get("input");

    // by ID
    cy.get("#inputEmail1");

    // by class value
    cy.get(".input-full-width");

    // by Attribute name
    cy.get("[fullwidth]");

    // by Attribute und Values
    cy.get('[placeholder="Email"]');

    // by entire Class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]');

    // by two attributes
    cy.get('[placeholder="Email"][fullwidth]');

    // by tag  attributes id and class
    cy.get(
      'input[placeholder="Email"][fullwidth]#inputEmail1.input-full-width'
    );

    // by cypress test ID
    cy.get('[data-cy="imputEmail1"]');
  });

  it("second test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    // Teory
    // get() - find  elements on the Page by locator globaly
    // find() - find child elements by locator
    // Contains() - find HTM test and by text and locator

    cy.contains("Sign in");
    cy.contains('[status="warning"]', "Sign in");
    cy.contains("nb-card", "Horizontal form").find("button");
    cy.contains("nb-card", "Horizontal form").contains("Sign in");
    cy.contains("nb-card", "Horizontal form").get("button");

    //Cypress chains and Dom

    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form")
      .find("nb-checkbox")
      .click();
  });

  it("save subject of the command", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.contains("nb-card", "Using the Grid")
      .find('[for="inputEmail1"]')
      .should("contain", "Email");
    cy.contains("nb-card", "Using the Grid")
      .find('[for="inputPassword2"]')
      .should("contain", "Password");

    // CANT DO thinh like This
    //const UsingThrGrid = cy.contains("nb-card", "Using the Grid");
    //UsingThrGrid.find('[for="inputEmail1"]').should("contain", "Email");
    //UsingThrGrid.find('[for="inputPassword2"]').should("contain", "Password");

    // 1 Cypress Alias

    cy.contains("nb-card", "Using the Grid").as("UsingThrGrid");
    cy.get("@UsingThrGrid")
      .find('[for="inputEmail1"]')
      .should("contain", "Email");
    cy.get("@UsingThrGrid")
      .find('[for="inputPassword2"]')
      .should("contain", "Password");
  });

  it("save subject of the command", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    //1. Extrahing different Test of the Page
    //cy.contains("nb-card", "Basic form")
    //.find('[for="exampleInputEmail1"]')
    //.should("contain", "Email address");
    cy.get('[for="exampleInputEmail1"]').should("contain", "Email address");

    //2
    cy.get('[for="exampleInputEmail1"]').then(label => {
      const labelTest = label.text();
      expect(labelTest).to.equal("Email address");
      cy.wrap(labelTest).should("contain", "Email address");
    });
    //3
    cy.get('[for="exampleInputEmail1"]')
      .invoke("text")
      .then(text => {
        expect(text).to.equal("Email address");
      });
    //3

    cy.get("#exampleInputEmail1").type("nnjioda@yahoo.fr");
    cy.get("#exampleInputEmail1")
      .invoke("prop", "value")
      .should("contain", "nnjioda@yahoo.fr");
  });
  it("save subject of the command", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.contains("nb-card", "Using the Grid")
      .find('[type="radio"]')
      .then(radioButtons => {
        cy.wrap(radioButtons)
          .eq(0)
          .check({ force: true })
          .should("be.checked");
        cy.wrap(radioButtons)
          .eq(1)
          .check({ force: true });
        cy.wrap(radioButtons)
          .eq(0)
          .should("not.be.checked");
        cy.wrap(radioButtons)
          .eq(2)
          .should("be.disabled");
      });
  });
  it("save subject of the command", () => {
    cy.visit("/");
    cy.contains("Modal & Overlays").click();
    cy.contains("Toastr").click();

    //cy.get('[type="checkbox"]').check({ force: true });
    cy.get('[type="checkbox"]')
      .eq(0)
      .click({ force: true });
    cy.get('[type="checkbox"]')
      .eq(1)
      .click({ force: true });
  });
  it.only("Date Picker", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Datepicker").click();

    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then(Input => {
        cy.wrap(Input).click();
        cy.get(".day-cell")
          .not(".bounding-month")
          .contains("21")
          .click();
        cy.wrap(Input)
          .invoke("prop", "value")
          .should("contain", "Sep 21, 2025");
        // different faceons de faire assertion
        cy.wrap(Input).should("have.value", "Sep 21, 2025");
      });

    //console.log(date);
  });
});
