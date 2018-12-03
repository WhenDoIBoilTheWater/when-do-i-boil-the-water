const fuck = require('../fuck');

test('outputs fuck work', () => {
  expect(fuck('work')).toMatch(/fuck/);
});
