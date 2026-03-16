/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const deleteAppt = () => {
    cy.visit(Cypress.expose("URL_Staging"))
    cy.contains('button>span', 'Accounting').should('exist').click({ force: true })
    cy.contains('li>button', /^Reports$/).should('exist').click({ force: true })
    cy.contains('div>div', 'Bookings').should('exist').click({ force: true })
    cy.visit('https://vendor.bookr-dev.com/admin/accounting/reports/bookings')
    cy.get('input[placeholder="Filters"]').next('div').click({ force: true })
    cy.contains('div>div>p', 'Booking status').should('exist').click({ force: true })
    cy.contains('p', 'No Status').parent('li').find('input[type="radio"]').click({ force: true })
    cy.contains('button', 'Apply Filters').click({ force: true })
    cy.get('tbody').find('tr').first().click({ force: true })
    cy.contains('div>h3', 'Appointment Details', { matchCase: false }).should('exist')
    cy.contains('button', 'No Status').click({ force: true })
    cy.contains('div>span', 'Canceled').click({ force: true })
    cy.contains('button', 'Proceed').click({ force: true })
}

describe('Staging | Cancel Appointments | Admin credentials', () => {

    before(() => {
        cy.then(Cypress.session.clearAllSavedSessions)
    })

    beforeEach(() => {
        cy.login('Admin Section', Cypress.expose("Vendor_Admin_Username_Staging"), Cypress.expose("Vendor_Admin_Password_Staging"))
    })

    it('Cancel all appointments', () => {
        Cypress._.times(20, () => deleteAppt())
    })
})
