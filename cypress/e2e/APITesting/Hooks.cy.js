describe('Hooks',()=>{

    before(()=>{
        cy.log('****lunch app****')
    })

    after(()=>{
        cy.log('*****close app***')
    })
    beforeEach(()=>{
        cy.log('****login app****')
    })
    afterEach(()=>{
        cy.log('****lagout app***')
    })

    it('search',()=>{
        cy.log('search')
    })

    it('advanced search',()=>{
        cy.log('advanced search')
    })

    it('lisenting',()=>{
        cy.log('lesening')
    })




})




