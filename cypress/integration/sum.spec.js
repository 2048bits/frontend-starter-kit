context('Sum', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

  it('calculates sum properly', () => {
    cy.get('.js-first-number').type('14');
    cy.get('.js-second-number').type('12');

    cy.get('.js-sum-result').should('have.text', '26');
  });

  it('shows placeholder if first number is missing', () => {
    cy.get('.js-second-number').type('12');

    cy.get('.js-sum-result').should('have.text', '[ENTER NUMBERS TO SEE THE SUM]');
  });

  it('shows placeholder if second number is missing', () => {
    cy.get('.js-first-number').type('14');

    cy.get('.js-sum-result').should('have.text', '[ENTER NUMBERS TO SEE THE SUM]');
  });

  it('shows placeholder if both numbers is missing', () => {
    cy.get('.js-sum-result').should('have.text', '[ENTER NUMBERS TO SEE THE SUM]');
  });
});
