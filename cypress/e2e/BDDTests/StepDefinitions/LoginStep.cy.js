import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

When("User opens url {url}", (url)=>{
    cy.visit(url)
})

When("Inputs username: {username} and password: {password}", (username, password)=>{
    cy.get("#signinSrEmail").type(username);
    cy.get("#signupSrPassword").type(password);
    
})

When("User proceed to Login, user must pass the captcha", ()=>{
    cy.get('[style="width: 304px; height: 78px;"] > textarea').invoke('remove')
})

Then("User should click Login button", ()=>{
    cy.get("button[class='btn btn-lg btn-block btn-primary']").click();
})