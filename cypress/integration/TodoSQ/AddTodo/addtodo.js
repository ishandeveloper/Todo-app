import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

var todo = ''

Given('I open the main page', () => {
 let url = Cypress.config().baseUrl;
 cy.visit(url)
})

When('I write {string} in the text field', (string) => {
 todo = string;
 cy.get('input').type(string)
})

When('I press the Add button', () => {
 cy.get('button').click()
})

Then('I see that it was added to the list', () => {
 cy.wait(1000)
 cy.get('li:last-child()').contains(todo)
})