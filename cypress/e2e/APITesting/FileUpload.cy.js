import 'cypress-file-upload'
describe("File upload",()=>{

    it .skip( 'single file upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('cypress_tutorial.pdf')
        cy.get('#file-submit').should('exist').should('be.visible').click()
        cy.wait(5000)
        cy.get('[class="example"] h3').should('have.text','File uploaded!')
    })

    it.skip( 'single file upload rename the file name',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'cypress_tutorial.pdf',fileName:'cypress.pdf'})
        cy.get('#file-submit').should('exist').should('be.visible').click()
        cy.wait(5000)
        cy.get('[class="example"] h3').should('have.text','File Uploaded!')
        cy.wait(5000)
    })

    it.skip('File upload - Drag and drop',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile("cypress_tutorial.pdf",{subjectType:'drag-n-drop'})
        cy.get('#drag-drop-upload .dz-filename').contains('cypress_tutorial.pdf')
    })

    it.skip('File upload - multiples files',()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get('#filesToUpload').attachFile(["cypress_tutorial.pdf","javascriptPrograms.txt"])
        
    })

    it.skip('should visit the new tab, remove target attribute',()=>{
        cy.visit("https://www.letskodeit.com/practice")
        cy.get('#opentab').should('have.attr','href').and('include','/courses')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.get('.form-control.find-input.dynamic-text').should('exist').type("selenium WebDriver Advanced")
        cy.get('.find-course.search-course').should('exist').click()
        
    })

    it.only('should visit the new tab without remove target attribute',()=>{
        cy.visit("https://www.letskodeit.com/practice")
        cy.get('#opentab').then(newTab=>{
            const hrefTab = newTab.prop('href')
            cy.visit(hrefTab)
            cy.url().should('include','/courses')
            cy.get('.form-control.find-input.dynamic-text').should('exist').type("selenium WebDriver Advanced")
            cy.get('.find-course.search-course').should('exist').click()
        })
        cy.go('back')
        cy.go('forward')
    
        
    })
    
    it.only('should visit the new tab without remove target attribute',()=>{
        cy.visit("https://www.letskodeit.com/practice")
        cy.get('#opentab').then(newTab=>{
            const hrefTab = newTab.prop('href')
            cy.visit(hrefTab)
            cy.url().should('include','/courses')
            cy.get('.form-control.find-input.dynamic-text').should('exist').type("selenium WebDriver Advanced")
            cy.get('.find-course.search-course').should('exist').click()
        })
        cy.go('back')
        cy.go('forward')
    
        
    })




})