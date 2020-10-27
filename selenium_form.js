// Open https://the-internet.herokuapp.com/login

// Please automate next test cases:
// 1. Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in
        // it('Heroku login test', () => {
        //     cy.visit('https://the-internet.herokuapp.com/login');

        //     cy.get('[name="username"]').type('tomsmith');
        //     cy.get('[name="password"]').type('SuperSecretPassword!');
        //     cy.get('[type="submit"]').click();

        //     cy.get('div #flash.flash.success').contains('You logged into a secure area!').should('exist');
        // });
// 2. Login with invalid creds and check validation error
        // it('Heroku invalid login test', () => {
        //     cy.visit('https://the-internet.herokuapp.com/login');

        //     cy.get('[name="username"]').type('tomsmith56');
        //     cy.get('[name="password"]').type('SuperSecretPassword!');
        //     cy.get('[type="submit"]').click();

        //     cy.get('.flash.error').contains('Your username is invalid!').should('exist');
        // });
// 3. Logout from app and assert you successfully logged out
        // it('Heroku logout test', () => {
        //     cy.visit('https://the-internet.herokuapp.com/login');

        //     cy.get('[name="username"]').type('tomsmith');
        //     cy.get('[name="password"]').type('SuperSecretPassword!');
        //     cy.get('[type="submit"]').click();

        //     cy.get('a.button.radius').click();

        //     cy.get('.flash.success').contains('You logged out of the secure area!').should('exist');
        // });
