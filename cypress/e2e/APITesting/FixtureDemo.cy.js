describe('fixture',()=>{
    let userdata;
    before(()=>{
        cy.fixture("orangeHRM").then((data)=>{
            userdata = data;
        })
    })
 
    it('loginHRM',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.screenshot("orangeHRM LoginPage")
        cy.wait(5000)
        cy.get('[name="username"]').should('exist').should('be.visible').type(userdata.username)
    
        cy.get('[name="password"]').should('exist').should('be.visible').type(userdata.password)
        cy.get('[type="submit"]').should('exist').should('be.visible').click()
        cy.get("[class='orangehrm-login-slot-wrapper']").screenshot("logo")
    })

})