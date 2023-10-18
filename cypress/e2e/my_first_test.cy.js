/// <reference types="cypress" />

it('google test', function() {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type("Automation Step by Step{enter}")
    cy.wait(2000)
    cy.contains('Видео').click()
})