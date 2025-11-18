const { add } = require('./math');

test('2 + 3 should be 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('10 + 20 should be 25', () => {
  expect(add(10, 20)).toBe(25);
});
