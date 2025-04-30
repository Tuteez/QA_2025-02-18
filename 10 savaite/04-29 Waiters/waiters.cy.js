
it.only('timeout', () => {
    cy.visit('https://testpages.herokuapp.com/styled/progress-bars-sync.html')

   
    // cy.get('#progressbar0[value=100]', { timeout: 2000 }).should('be.exist')
    // cy.get('#progressbar0').should('have.attr', 'value', '100')

    // cy.get('#progressbar1[value=100]', { timeout: 3000 }).should('be.visible')
    // cy.get('#progressbar2[value=100]', { timeout: 10000 }).should('be.visible')

    // cy.get('#status',{timeout:11111}).should('have.text', 'Stopped')
    cy.contains('Stopped', { timeout: 12000 }).should('be.visible')
})

it('defaultCommandTimeout', () => {
    cy.visit('https://testpages.herokuapp.com/styled/progress-bars-sync.html')
    cy.get('#progressbar0').should('have.attr', 'value', '100')
    cy.get('#progressbar1[value=100]').should('be.visible')
    cy.get('#progressbar2[value=100]').should('be.visible')
})



