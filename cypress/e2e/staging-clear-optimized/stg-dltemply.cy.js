/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Staging | Delete Employees | Admin credentials', () => {

    beforeEach(() => {
        cy.login('Admin Section', Cypress.expose("Vendor0_Admin_Username_Staging"), Cypress.expose("Vendor0_Admin_Password_Staging"))
    })

    it('Delete all employees', () => {
        Cypress._.times(6, () => cy.deleteEmployee())
    })
})
