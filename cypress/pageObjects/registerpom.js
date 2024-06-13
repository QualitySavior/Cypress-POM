/// <reference types = 'cypress' />

class registerPage{

    //object created for storing locators
    elements = {
        accountLink: () => cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]'),
        registerLink: ()=> cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]'),
        fnInput: () => cy.get('#input-firstname'),
        lnInput: () => cy.get('#input-lastname'),
        emailInput: ()=> cy.get('#input-email'), 
        telephoneInput: () =>cy.get('#input-telephone'), 
        pwInput: ()=> cy.get('#input-password'),
        cpwInput: ()=>cy.get('#input-confirm'),
        tcLink: ()=> cy.get('[for="input-agree"]'), 
        continueBtn:()=>cy.get('[value="Continue"]'),
    }

     navigateRegister(){
        cy.visit(Cypress.env('baseURL'));
        this.elements.accountLink().last().should('have.attr', 'href', 'https://ecommerce-playground.lambdatest.io/index.php?route=account/account').click();
    }

    createUser(firstName,lastname, email,telephone,password,confirmpassword, ){
        
        this.elements.registerLink().last().click();
        this.elements.fnInput().type(firstName);
        this.elements.lnInput().type(lastname);
        this.elements.emailInput().type(email);
        this.elements.telephoneInput().type(telephone);
        this.elements.pwInput().type(password);
        this.elements.cpwInput().type(confirmpassword);
        this.elements.tcLink().click();
        cy.wait(5000);
        this.elements.continueBtn().click();
        cy.wait(5000);
        
    }

}export default registerPage;   // define as export to import this class in test files