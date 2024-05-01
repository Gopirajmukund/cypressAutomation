describe('alerts',()=>{

//java script alert : It will have some text and an 'OK' button
    it('alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').should('exist').click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contain('I am a JS Alert')
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it('JS confirm alert Ok button',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').should('exist').click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contain('I am a JS Alert')
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    })
    
    it('JS confirm alert cancel button',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').should('exist').click()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contain('I am a JS Confirm')
        })
        cy.on('window:confirm',()=>false)
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it('JS prompt alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('its a prompt alert')
        })
        cy.get('button[onclick="jsPrompt()"]').should('exist').click()
        cy.get('#result').should('have.text','You entered: its a prompt alert')
    })

    //approach 1
    it('authenticated alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth: {
            username: 'admin',
            password: 'admin'
        }})
        cy.get('.example p').should('have.contain','Congratulations!')
    })

    //approach 2
    it.only('authenticated alert',()=>{
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get('.example p').should('have.contain','Congratulations!')
    })

})