const { sumTwoNumbers } = require('./calculator');

it('should sum 2 and 2 and the result must be 4', () => {
  expect(sumTwoNumbers(2,2)).toBe(4);
});