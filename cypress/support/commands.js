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
    cy.get('[style="width: 304px; height: 78px;"] > textarea').invoke('remove')
    cy.get("button[class='btn btn-lg btn-block btn-primary']").click();

})

Cypress.Commands.add('generateRandomString', (length)=>{

    let randomString = '';
    while (randomString.length < length) {
      randomString += Math.random().toString(36).substring(2); 
    }
    return randomString.substring(0, length); 
})

Cypress.Commands.add('generateRandomNumber', (length)=>{

  const min = Math.pow(10, length - 1);  
  const max = Math.pow(10, length) - 1; 
  return Math.floor(Math.random() * (max - min + 1)) + min;
})

