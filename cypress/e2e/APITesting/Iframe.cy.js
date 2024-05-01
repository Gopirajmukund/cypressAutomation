import 'cypress-iframe'
describe("handling frames",()=>{

    it.skip('approach',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")
        const iframe = cy.get('#mce_0_ifr').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        iframe.clear().type("Mukund")
    })


    it ('approach',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded('#mce_0_ifr');
        cy.iframe('#mce_0_ifr').clear().type("Welcome to Iframe").type('{selectall}').type('{ctrl}b')
    })
})