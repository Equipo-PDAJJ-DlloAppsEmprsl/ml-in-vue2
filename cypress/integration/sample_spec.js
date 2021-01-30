describe('My first cypress test', ()=> {
    it('first assert', ()=> {
        expect(true).to.equal(true);
    });

    it('first test in cypress', ()=> {
        cy.visit('http://localhost:8080');
        cy.get('#input-7').type('guitarra {enter}'); 
        cy.get('.theme--dark.v-image:first').click()
    });
})