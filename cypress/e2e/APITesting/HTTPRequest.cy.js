const { describe } = require("mocha");

describe("HTTP Request",()=>{
    it("Get call",()=>{
        cypress.request('GET','hhtps://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal',200)
    })
})