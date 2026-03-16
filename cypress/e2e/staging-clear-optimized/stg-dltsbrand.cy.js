/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const deleteBrand = () => {
    cy.visit(Cypress.expose("URL_Staging") + 'auth')
    cy.contains('Inventory').should('exist').click({ force: true })
    cy.contains('Products').should('exist').click({ force: true })
    cy.contains('Options').should('exist').click({ force: true })
    cy.contains('li', 'Brand').should('exist').click({ force: true })
    cy.get('section>div>ul>li>*').eq(1).click()
    cy.contains('button', 'Delete').click({ force: true })
    cy.contains('span', 'Brand deleted', { matchCase: false }).should('exist')
}

describe('Staging | Delete Brands | Admin credentials', () => {

    beforeEach(() => {
        cy.login('Admin Section', Cypress.expose("Vendor0_Admin_Username_Staging"), Cypress.expose("Vendor0_Admin_Password_Staging"))
    })

    it('Delete all brands', () => {
        Cypress._.times(10, () => deleteBrand())
    })
})
