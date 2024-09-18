// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

Cypress.Commands.add('Login', ()=>{

    const url = Cypress.env('applicationURL')
    const username = Cypress.env('username')
    const password = Cypress.env('password')

    cy.visit(url);
    cy.get("#signinSrEmail").type(username);
    cy.get("#signupSrPassword").type(password);
    
    // cy.get('[style="width: 304px; height: 78px;"] > textarea').invoke('removeAttr', 'id')
    // cy.get('[style="width: 304px; height: 78px;"] > textarea').invoke('removeAttr', 'name')
    // cy.get('[style="width: 304px; height: 78px;"] > textarea').invoke('removeAttr', 'class')
    // cy.get('[style="width: 304px; height: 78px;"] > textarea').invoke('removeAttr', 'style')
    cy.get('[style="width: 304px; height: 78px;"] > textarea').invoke('remove')

   
    cy.get("button[class='btn btn-lg btn-block btn-primary']").click();

})

