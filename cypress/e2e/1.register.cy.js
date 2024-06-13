/// <reference types = 'cypress'/>

const registerPage = require('../pageObjects/registerpom')


describe('Register', () => {

    let register = new registerPage();
    let username = Cypress.env('username');

    it('User Registration', () => {
        //Visit URL
        register.navigateRegister();

        //Enter Valid data on register form and verify successful registration
        register.createUser('Bhumit', 'Kataria',Cypress.env('username'),'9898989898',Cypress.env('password'), Cypress.env('password'), )

         //Verify page title once user is register
         if (username = 'qualitysavior@gmail.com')
         {
            cy.get('.alert-dismissible').should('have.text', ' Warning: E-Mail Address is already registered!');
 
         }else{
            cy.get('.page-title').should('have.text', ' Your Account Has Been Created!')
         }
        
    })
    afterEach('take screenshot',()=>{
        cy.screenshot();
    })
})