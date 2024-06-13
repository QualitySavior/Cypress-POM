/// <reference types = 'cypress'/>

const registerPage = require('../pageObjects/registerpom')
const e2ePage = require('../pageObjects/e2epom')
let register, e2e;

describe('E2E product purchase', () => {
    register = new registerPage();
    e2e = new e2ePage();

    beforeEach('login',()=>{
        // Visit URL
        register.navigateRegister();
        cy.wait(5000)
        // User login
        e2e.userLogin(Cypress.env('username'),Cypress.env('password'));

    })

    it.only('Select product & add to cart', ()=>{
        e2e.selectProduct();
    })

    it('Process and checkout', ()=>{
        e2e.placeOrder('firstname', 'lastname', 'company', 'address_1', 'address_2', 'city', 'postcode', 'Bhumit','Kataria', 'SSPL', 'Add1', 'Add2', 'Ahmedabad', '380054', 'Chicago', 'Jose');
        e2e.verifyDetailsOnHistory();
    })

    it('Verify order detail', ()=>{
        e2e.verifyDetailsOnHistory();
    })

    afterEach('take screenshot',()=>{
        cy.screenshot();
    })
})