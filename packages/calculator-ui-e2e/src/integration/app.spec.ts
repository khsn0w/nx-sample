import {getHeader} from '../support/app.po';

describe('calculator-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    expect(getHeader()).ok
  });
});
