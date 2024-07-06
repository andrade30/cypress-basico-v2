Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Alessandro')
    cy.get('#lastName').type('Andrade')
    cy.get('#email').type('andrade@email.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})