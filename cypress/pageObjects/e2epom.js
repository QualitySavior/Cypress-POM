/// <reference types = 'cypress' />


class e2ePage{

    elements = {
        input :(name)=> cy.get(`[name ="${name}"]`),
        loginLink: () => cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]'),
        emailInput: ()=> cy.get('#input-email'), 
        pwInput: ()=> cy.get('#input-password'),
        loginBtn:()=>cy.get('[value="Login"]'), 
        category:()=>cy.contains("a", "Shop by Category"),
        subCategory:()=> cy.contains(".info", " Laptops & Notebooks"),
        item:()=>cy.contains(".text-ellipsis-2", "HTC Touch HD"),
        addToCartBtn:()=>cy.get('[title="Add to Cart"]'),
        cart:()=>cy.get('.cart-icon'),
        checkout:()=> cy.contains("Checkout"),
        country:()=> cy.get("#input-payment-country"),
        region:()=> cy.get("#input-payment-zone"),
        tcLink: ()=> cy.get('[for="input-agree"]'), 
        continueBtn:()=>cy.get('[id="button-save"]'),
        totalAmount :()=>cy.contains("td", "Total:"),
        subtotal:() =>cy.contains("td", "Sub-Total:"),
        shippingRate:()=>cy.contains("td", "Flat Shipping Rate:"),
        confirmBtn:()=>cy.get('[id="button-confirm"]'),
        success:()=> cy.get(".page-title my-3"),
        orderHistory: () => cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/order"]'),
        pageTitle:()=> cy.get(".page-title h3 mb-3 selectorgadget_selected"),
        details:()=> cy.get(".text-left"),
        amount:()=>cy.get(".text-right selectorgadget_selected")
        
    }

    userLogin(email, password){
        this.elements.loginLink().last().click();
        this.elements.emailInput().type(email);
        this.elements.pwInput().type(password);
        this.elements.loginBtn().click();
    }

    selectProduct(){
        this.elements.category().click();
        this.elements.subCategory().click();
        this.elements.item().click();
        this.elements.addToCartBtn().last().click();
    }
    placeOrder(tagFName,tagLName, tagCompany,tagAdd1,tagAdd2,tagCity,tagPostcode,fn, ln, company, add1, add2, city, postcode,country,state){
        cy.wait(5000)
        this.elements.cart().first().click(); 
        this.elements.checkout().click();  
        this.elements.input(tagFName).type(fn);
        this.elements.input(tagLName).type(ln);
        this.elements.input(tagCompany).type(company);
        this.elements.input(tagAdd1).type(add1);
        this.elements.input(tagAdd2).type(add2);
        this.elements.input(tagCity).type(city);
        this.elements.input(tagPostcode).type(postcode);
        this.elements.country().select(country);
        cy.wait(5000);
        this.elements.region().select(state);
        this.elements.tcLink().click(); 
        
        this.elements.totalAmount().next().find("strong").invoke("text").then((totalText) => {
            const total = totalText.trim();
            cy.log("Total Amount:", total);
          });
    
          this.elements.subtotal().next().find("strong").invoke("text").then((totalText) => {
            const total = totalText.trim();
            cy.log("SubTotal Amount:", total);
          });
    
          this.elements.shippingRate().next().find("strong").invoke("text").then((totalText) => {
            const total = totalText.trim();
            cy.log("Shipping amount:", total);
          });

          this.elements.continueBtn().click();  
          this.elements.confirmBtn().click();
          this.elements.success().should('have.text', ' Your order has been placed!');
    }
    
    verifyDetailsOnHistory(){
        this.elements.orderHistory().click();  
        this.elements.pageTitle().should('have.text', 'Order History');
        this.elements.details().eq(4).should('have.value', 'Bhumit Kataria'); // Customer
        this.elements.details().eq(5).should('have.value', 'Pending'); // status
        this.elements.details().should('be.greaterThan', '$150'); // amount
    }

}export default e2ePage;   // define as export to import this class in test files