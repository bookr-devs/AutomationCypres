/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const deleteProduct = () => {
    cy.visit(Cypress.expose("URL_Staging") + 'auth')
    cy.contains('Inventory').should('exist').click({ force: true })
    cy.contains('Products').should('exist').click({ force: true })
    cy.contains('h6', 'Products').should('exist')
    cy.get('div[row-id="0"]').find('div[col-id="category.name"]').should('exist').click({ force: true })
    cy.contains('h3', 'Product details').should('exist')
    cy.contains('button', 'Delete').should('exist').click({ force: true })
    cy.contains('p', 'Are you sure you want to delete this product?')
        .parents('section').next('div').find('button').eq(1).click({ force: true })
    cy.contains('span', 'Product deleted successfully').should('exist')
}

describe('Staging | Delete Products | Admin credentials', () => {

    beforeEach(() => {
        cy.login('Admin Section', Cypress.expose("Vendor0_Admin_Username_Staging"), Cypress.expose("Vendor0_Admin_Password_Staging"))
    })

    it('Delete all products', () => {
        Cypress._.times(20, () => deleteProduct())
    })
})
