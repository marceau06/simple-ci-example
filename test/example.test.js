const { expect } = require('chai');

// Une fonction simple à tester
function add(a, b) {
  return a + b;
}

describe('Addition function', function() {
  it('should return 3 when adding 1 and 2', function() {
    expect(add(1, 2)).to.equal(3);
  });

  it('should return -1 when adding -1 and 0', function() {
    expect(add(-1, 0)).to.equal(-1);
  });
});
