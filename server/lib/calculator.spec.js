const { sumTwoNumbers } = require('./calculator');

it('should sum 2 and 2 and the result must be 4', () => {
  expect(sumTwoNumbers(2,2)).toBe(4);
});

it('should sum 2 and 2 even if one of them is a string and the result must be 4 ', () => {
  expect(sumTwoNumbers('2','2')).toBe(4);
});

it('should throw and error if what is provided to the method cannot be summed', () => {
  expect(() => {
    sumTwoNumbers('','2');
  }).toThrowError();

  expect(() => {
    sumTwoNumbers([2,2])
  }).toThrowError();
  
  expect(() => {
    sumTwoNumbers({})
  }).toThrowError();
  
  expect(() => {
    sumTwoNumbers()
  }).toThrowError();
});