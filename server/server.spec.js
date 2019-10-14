const { expect } = require('chai');

let total = 0;

describe('test test', () => {
  beforeEach(() => {
    total = 0;
  });

  it('it works', () => {
    total = 2 + 2;
    expect(total).to.be.equal(4);
  });
});
