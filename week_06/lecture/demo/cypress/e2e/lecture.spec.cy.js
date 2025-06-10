


// Syntax

// Very similar to Jasmine:

// describe()
// it()


// First step - always visit the page you are testing:

// cy.visit('https://example.com');


// Next select an element:

// cy.contains('some text')

// It is used to find an element on the page
// that includes specific text.


// .contains():

// - Search for text inside elements
// (like buttons, links, divs, etc.).

// - Return the first matching element.

// - Fail the test if the text is not found.



// Example clicking on 'focus' button
//
// it('visit and click', () => {
//     cy.visit('https://example.cypress.io/'); // this way I visit the page
//     cy.contains('focus').click(); // this way I find a button by label and click it
// });



// This demo is showing how to test
// - page loaded
// - button is present on the page
// - the button is clickable



// Example clicking on 'non-existing-button' button

// it('visit and click', () => {
//     cy.visit('https://example.cypress.io/');
//     cy.contains('non-existing-button').click();
// });




// Selecting elements

// cy.get('#username') // by ID
// cy.get('.btn-submit') // by class
// cy.get('input[type="text"]') // by attribute





// Interacting with elements

// cy.get('#username').type('test@example.com');
// cy.get('#password').type('password123');
// cy.get('.btn-submit').click();





// Assertions

// Assertions help to verify whether some conditions
// are met in my tests.


// Examples:

// - Is my element visible?
// - Does this div contain "Success"?
// - Is the checkbox checked?


// Cypress syntax has three methods for assertions:

// 1) .should()
// 2) .expect()
// 3) .assert()






// Examples of .should()

// cy.get('button').should('be.visible');
// cy.url().should('include', '/dashboard');
// cy.get('input').should('have.value', 'John');




// 'have.value' vs 'contain'

// should('have.value') => for input field values
// should('contain') => for DOM elements content, not exact match




// For example


// <input name='username'>
// cy.get('input[name="username"]').should('have.value', 'exact match');

// we use .should('have.value')





// <section class='notification'>You are all set</section>
// cy.get('.notification').should('contain', 'You are');

// we use .should('contain')






// Other assertions with .should():

// .should('have.class') => input element has a class
// .should('have.focus') => input element has focus
// .should('be.visible') => DOM element is visible on the page



// To test input value

// it('input a value', () => {
//     cy.visit('https://example.cypress.io/');
//     cy.contains('type').click();
//     cy.get('.action-email').type('andrei');
//     cy.get('.action-email').should('have.value', 'andrei');
// });



// .clear()

// I can programmatically clear the input

// cy.get('.input_field').clear();





// .submit()

// I can programmatically submit the form

// cy.get('.subscription_form').submit();








// Variables

// it('input a value with variable', () => {
//     const name = 'andrei';
//     cy.visit('https://example.cypress.io/');
//     cy.contains('type').click();
//     cy.get('.action-email').type(name);
//     cy.get('.action-email').should('have.value', name);
// });



// Test form submission and verify the result

// it('form submission', () => {
//     cy.visit('https://example.cypress.io/');
//     cy.contains('submit').click();
//     cy.get('.action-form').submit();
//     cy.get('.action-form').next().should('have.text', 'Your form has been submitted!');
// });



// beforeEah()

// This block will run before each test.


// Without beforeEach()

// describe('Homepage Tests', () => {
//     it('should display the header', () => {
//         cy.visit('/'); // Repeated in every test
//         cy.get('h1').should('contain', 'Welcome');
//     });
//
//     it('should have a working search bar', () => {
//         cy.visit('/'); // Repeated again
//         cy.get('#search').type('Cypress').should('have.value', 'Cypress');
//     });
// });


// With beforeEach()

// describe('Homepage Tests', () => {
//     beforeEach(() => {
//         cy.visit('/'); // Visit homepage once before every test
//     });
//     it('should display the header', () => {
//         cy.get('h1').should('contain', 'Welcome');
//     });
//     it('should have a working search bar', () => {
//         cy.get('#search').type('Cypress').should('have.value', 'Cypress');
//     });
// });






// Tutorial: https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test







// Thank you