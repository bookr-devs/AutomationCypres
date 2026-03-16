/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Staging | Delete Customers | Admin credentials', () => {

    beforeEach(() => {
        cy.login('Admin Section', Cypress.expose("Vendor6_Admin_Username_Staging"), Cypress.expose("Vendor6_Admin_Password_Staging"))
    })

    it('Delete all customers', () => {
        Cypress._.times(315, () => cy.deleteCustomer())
    })
})
