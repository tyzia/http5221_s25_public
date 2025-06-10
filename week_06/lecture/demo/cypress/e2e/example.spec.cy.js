// uncomment one by one

// describe('Subscription Form', () => {
//     beforeEach(() => cy.visit('example.html'));
//
//     it('should have error on username field if it is empty', () => {
//         cy.get('.subscription__name').clear();
//         cy.get('.subscription').submit();
//         cy.get('.subscription__name')
//             .should('have.class', 'subscription__input_error')
//             .should('be.focused');
//     });
//
//     it('should accept username', () => {
//         cy.get('.subscription__name').type('andrei');
//         cy.get('.subscription__name').should('have.value', 'andrei');
//     });
//
//     it('should submit form if username  was given', () => {
//         cy.get('.subscription__name').type('andrei');
//         cy.get('.subscription').submit();
//         cy.get('.output__name').should('contain', 'andrei');
//     });
// });