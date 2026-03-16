/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const deleteCategory = () => {
    cy.visit(Cypress.expose("URL_Staging") + 'auth')
    cy.contains('Inventory').click({ force: true })
    cy.contains('Products').should('exist').click({ force: true })
    cy.contains('Options').should('exist').click({ force: true })
    cy.contains('li', 'Category').should('exist').click({ force: true })
    cy.get('section>div>ul>li>*').eq(2).click()
    cy.contains('button', 'Delete').click({ force: true })
    cy.contains('span', 'Category deleted', { matchCase: false }).should('exist')
}

describe('Staging | Delete Categories | Admin credentials', () => {

    beforeEach(() => {
        cy.login('Admin Section', Cypress.expose("Vendor0_Admin_Username_Staging"), Cypress.expose("Vendor0_Admin_Password_Staging"))
    })

    it('Delete all categories', () => {
        Cypress._.times(5, () => deleteCategory())
    })
})
