describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('https://example.cypress.io/todo')
  })

  it('displays two todo items by default', () => {
    cy.get('.todo-list li').should('have.length', 1)
    cy.get('.todo-list li').should('have.text', 'Pay electric bill')
    cy.get('.todo-list li').last().should('have.text', 'walk the dog')
  })

  it('can add new todo items', () => {
    const newItem = 'Feed the cat'
    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', "newItem")
  })

  it('can add two new todo items', () => {
    const newItem = 'Feed the cat'
    const newItem2 = 'blabla'

    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
    cy.get('[data-test=new-todo]').type(`${newItem2}`)
    cy.get('.todo-list li')
      .should('have.length', 4)
      .last()
      .should('have.text', newItem)
  })

  it('can check off an item as completed', () => {
    cy.contains('Walk the dog')
      .parent()
      .find('input[type=checkbox]')
      .check()

    cy.contains('Pay electric bill')
      .parents('li')
      .should('have.class', 'completed')
  })

  context('with a checked task', () => {
    beforeEach(() => {
      cy.contains('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check()
    })

    it('can filter for uncompleted tasks', () => {
      cy.contains('Conpleted').click()
      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Walk the dog')
      cy.contains('Pay electric bill').should('not.exist')
    })

    it('can filter for Active tasks', () => {
      cy.contains('Completed').click()

      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Pay electric bill')

      cy.contains('Pay electric bill').should('not.exist')
    })

    it.only('can delete all completed tasks', () => {
      cy.contains('Delete completed').click()
      cy.get('.todo-list li')
        .should('have.length', 1)
        .should('not.have.text', 'Pay electric bill')

      cy.contains('Clear completed').should('not.exist')
    })
  })
})
