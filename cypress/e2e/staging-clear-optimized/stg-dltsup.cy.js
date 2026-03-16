/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const deleteSupplier = () => {
    cy.visit(Cypress.expose("URL_Staging") + 'auth')
    cy.contains('Inventory', { matchCase: false }).should('exist').click({ force: true })
    cy.contains('Supplier', { matchCase: false }).should('exist').click({ force: true })
    cy.contains('h6', 'Supplier', { matchCase: false }).should('exist')
    cy.get('tbody>*').should('exist').first().click({ force: true })
    cy.contains('h3', 'Supplier Details', { matchCase: false }).should('exist')
    cy.contains('button', 'Delete').should('exist').click({ force: true })
    cy.contains('p', 'Are you sure you want to delete this supplier?')
        .parents('section').next('div').find('button').eq(1).click({ force: true })
    cy.contains('span', 'Supplier deleted successfully').should('exist')
}

describe('Staging | Delete Suppliers | Admin credentials', () => {

    beforeEach(() => {
        cy.login('Admin Section', Cypress.expose("Vendor0_Admin_Username_Staging"), Cypress.expose("Vendor0_Admin_Password_Staging"))
    })

    it('Delete all suppliers', () => {
        Cypress._.times(20, () => deleteSupplier())
    })
})
