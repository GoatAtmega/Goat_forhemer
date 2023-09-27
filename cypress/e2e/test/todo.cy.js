/// <reference types="cypress" />

// 1 и 2 тест//
describe('Open site to-do and add 3 todo tasks', () => {
  beforeEach(() => {
    cy.visit('https://forhemer.github.io/React-Todo-List/')

    const Item1 = 'first task'
    const Item2 = 'second task'
    const Item3 = 'third task'

    cy.get('.input-text').type(`${Item1}{enter}`)
    cy.get('.input-text').type(`${Item2}{enter}`)
    cy.get('.input-text').type(`${Item3}{enter}`)
  })


  // 3 тест//
  it('Have 3 elements in todo list', () => {

    cy.get('span')
      .should('have.length', 3)
  })


  // 4 тест//
  it('Mark first task as complited', () => {

    cy.get('[type="checkbox"]')
    .first()
    .check()

    cy.get('[type="checkbox"]')
    .first()
    .should('be.checked')
  })


  // 5 тест//
  it('The text of the task is crossed out', () => {

    cy.get('[type="checkbox"]')
    .first()
    .check()

    cy.get('span')
    .first()
    .should('have.css', 'text-decoration', 'line-through solid rgb(89, 89, 89)')
  })


  // 6 тест//
  it('Delete first task', () => {

    cy.get('[type="checkbox"]')
    .first()
    .check()

    cy.get('[type=button]')
    .first()
    .click()
  })


  // 7 тест//
  it('The text of the task is crossed out', () => {

    cy.get('[type="checkbox"]')
    .first()
    .check()

    cy.get('span')
    .should('have.length', 3)

    cy.get('[type=button]')
    .first()
    .click()

    cy.get('span')
    .should('have.length', 2)
  })

})