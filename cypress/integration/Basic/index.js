import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const labelToDataTest = label =>
    label === 'Programs' ? 'menu-programs' : 'menu-dataSets'

const resourceToDataTest = resource =>
    ['programs', 'program'].includes(resource) ? 'program' : 'dataSet'

const lengths = {
    program: 14,
    dataSet: 26,
}

Given('the user is on the root page', () => {
    cy.visit('/')
})

When('the user clicks on the {string} menu item', menuLabel => {
    cy.get(`[data-test="${labelToDataTest(menuLabel)}"]`).click()
})

Then('a list of all available {string} should be shown', resource => {
    const dataTest = resourceToDataTest(resource)
    cy.get(`[data-test*="list-${dataTest}"]`).should(
        'have.length',
        lengths[dataTest]
    )
})

When('clicks the {string} with the id {string}', (resource, id) => {
    cy.get(`[data-test="list-${resourceToDataTest(resource)}-${id}"]`).click()
})

Then('details should show the {string} {string}', (key, value) => {
    cy.get(`[data-test="details-${key}"]`).should('have.text', value)
})
