const { add, sub , multi } = require('./math');

test('2 + 3 should be 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('10 + 20 should be 30', () => {
  expect(add(10, 20)).toBe(30);
});

test('2 - 3 should be -1', () => {
  expect(sub(2, 3)).toBe(-1);
});

test('2 * 3 should be 9', () => {
  except(multi(2,3)).toBe(9);
})

test('3 * 3 should be 9', () => {
  except(multi(3,3)).toBe(9);
})
