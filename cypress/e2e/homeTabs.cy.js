import locators from '../support/locators';

describe('Home tab tests', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/')
  })

  it('Categories', () => {
    cy.contains(locators.categoriesTitle).scrollIntoView().should('be.visible')
    cy.contains(locators.categoriesTitle).should('have.text', 'CATEGORIES')
    cy.contains(locators.categoriesTitle).click()
    cy.contains('Samsung Galaxy').scrollIntoView().should('be.visible')

    cy.get(locators.listCategories).contains('Phones').should('be.visible')
    cy.get(locators.listCategories).contains('Phones').should('have.text', 'Phones')
    cy.get(locators.listCategories).contains('Phones').click()
    cy.contains('Samsung Galaxy').should('be.visible')
    
    cy.get(locators.listCategories).contains('Laptops').should('be.visible')
    cy.get(locators.listCategories).contains('Laptops').should('have.text', 'Laptops')
    cy.get(locators.listCategories).contains('Laptops').click()
    cy.contains('Sony vaio').should('be.visible')

    cy.get(locators.listCategories).contains('Monitors').should('be.visible')
    cy.get(locators.listCategories).contains('Monitors').should('have.text', 'Monitors')
    cy.get(locators.listCategories).contains('Monitors').click()
    cy.contains('Apple monitor').should('be.visible')
  })

  it('Previous and Next buttons', () => {
    cy.get(locators.listCategories).contains('Phones').click()
    cy.get(locators.viewCategories).contains('Samsung Galaxy').should('be.visible')

    cy.get(locators.viewCategories).contains(locators.nextTittle).should('be.visible')
    cy.get(locators.viewCategories).contains(locators.nextTittle).click()
    cy.get(locators.viewCategories).contains('Sony vaio').should('be.visible')

    cy.get(locators.viewCategories).contains(locators.previousTittle).scrollIntoView().should('be.visible')
    cy.get(locators.viewCategories).contains(locators.previousTittle).click().click()
    cy.get(locators.viewCategories).contains('Laptops').should('be.visible')
  })
})
