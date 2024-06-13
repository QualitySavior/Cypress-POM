/// <reference types = 'cypress'/>

let userId, token, data;
describe("API testcases", () => {
  before(() => {
    cy.fixture("userData").then((userData) => {
      data = userData;
    });
  });

  it("Registration User", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/register",
      body: {
        email: data.api_data.email,
        password: data.api_data.password,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      userId = response.body.id;
      token = response.body.token;
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("token");
    });
  });

  it("Login User", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/login",
      body: {
        email: data.api_data.email,
        password: data.api_data.password,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      token = response.body.token;
      expect(response.body).to.have.property("token");
    });
  });

  it('Get specific user', ()=>{
    cy.request({
        method : 'GET',
        url : 'https://reqres.in/api/users/2',
    }).then((res)=>{
        expect(res.status).to.eq(200)
        expect(res.body.data.first_name).to.eq('Janet')
    })
})

  it('Create user', ()=>{
    cy.request({
        method : 'POST',
        url : 'https://reqres.in/api/users',
        body :{
            "name": "morpheus",
            "job": "QA engineer"
        }
    }).then((res)=>{   
        cy.log(JSON.stringify(res)) 
        expect(res.status).to.eq(201)
        expect(res.body).has.property('name', 'morpheus')
        expect(res.body).has.property('job', 'QA engineer')
    })
})

  it("Verify API respose time", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?delay=3",
    }).then((response) => {
      expect(response.status).to.equal(200);
      // Assert the response time
      expect(response.duration).to.be.lessThan(5000);
    });

  });
  afterEach('take screenshot',()=>{
    cy.screenshot();
})
});