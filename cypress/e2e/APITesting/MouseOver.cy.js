describe('mouse over',()=>{

    
    it('Hover and Validate Text using trigger(\'mouseover\')', function () {
        cy.visit('https://www.amazon.com/')
        cy.get('[data-csa-c-content-id="nav_ya_signin"]').trigger('mouseover')
        cy.contains('Create a List').click()
        cy.url().should('include','wishlist/intro')
    })




})