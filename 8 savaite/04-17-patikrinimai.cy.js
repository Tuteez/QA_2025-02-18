Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

describe('Assertions', () => {

    it("a lot of should's", () => {
        cy.visit('https://demo.opencart-extensions.co.uk/')

        // ar elementas matomas
        cy.contains('Google Merchant Shoping XML Feeds & Sitemaps').should('be.visible')
        cy.get('[data-original-title=\'Add to Wish List\']').should('be.visible')

        // tikrinam elemento teksta
        // have kai nurodom visa teksta
        cy.get('h2').should('have.text', 'Google Merchant Shoping XML Feeds & Sitemaps')
        // contains kai nurodom tik dali
        cy.get('h2').should('contains.text', 'Google Merchant')
        cy.get('h2').should('contain', 'Google Merchant')

        //tikrinam kiek yra tokiu elementu
        cy.get('.product-thumb').should('have.length', 4)

        // ar turi lementas klase:
        cy.get('.product-thumb img').should('have.class', 'img-responsive')

        // galim tikrinti bet koki atributa
        cy.get('.product-thumb img').should('have.attr', 'class', 'img-responsive')
        cy.get('.product-thumb img').should('have.attr', 'title', 'iPhone')

        //galima patikrinti ir url
        cy.url().should('include', 'opencart-extensions.co.uk')

        // asertu jungimas i grandine
        // elementas.should().and().and()... etc
        cy.get('.product-thumb')
            .should('have.length', 4)
            .and('be.visible')
            .and('contains.text', 'Add to Cart')

    })

    it('radio-button', () => {
        cy.visit('https://demoqa.com/radio-button')
        cy.get('#yesRadio').click({ force: true })

        // tikrinam kad radio button ir pazymetas
        cy.get('#yesRadio').should('be.checked')
        // tikrinam kad radio button nera pazymetas
        cy.get('#impressiveRadio').should('not.be.checked')
        // tikrinam kad radio button yra disablintas (neaktyvus)
        cy.get('#noRadio').should('be.disabled')
        //ar disabled galima tikrinti ir kitiem elementams
    })

})