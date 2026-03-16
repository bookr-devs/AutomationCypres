/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const deleteSubscription = () => {
    cy.visit(Cypress.expose("URL_Staging") + 'auth')
    cy.contains('button>span', 'Subscriptions').should('exist').click({ force: true })
    cy.contains('h6', 'Subscriptions').should('exist')
    cy.get('tbody>*').should('exist').first().click({ force: true })
    cy.contains('h3', 'Update Subscription', { matchCase: false }).should('exist')
    cy.contains('button', 'Delete').should('exist').click({ force: true })
    cy.contains('p', 'Are you sure you want to delete this subscription?')
        .parents('section').next('div').find('button').eq(1).click({ force: true })
    cy.contains('span', 'Subscription deleted successfully').should('exist')
}

describe('Staging | Delete Subscriptions | Admin credentials', () => {

    beforeEach(() => {
        cy.login('Admin Section', Cypress.expose("Vendor10_Admin_Username_Staging"), Cypress.expose("Vendor10_Admin_Password_Staging"))
    })

    it('Delete all subscriptions', () => {
        Cypress._.times(5, () => deleteSubscription())
    })
})
