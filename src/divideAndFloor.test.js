const divideAndFloor = require('./divideAndFloor');

describe('DivideAndFloor function', () => {
  it('should divide the numbers and out put results in an object', () => {
    expect(divideAndFloor(15,5)).toEqual({result: 3, remainder: 0, dividesEvenly: false});
  });
  it('should throw an error if num1 or num2 is missing ', () => {
    expect(() => divideAndFloor(12)).toThrow(/^A number is missing$/);
  });
  it('should throw an error if one of the required parameters is not a number', () => {
    expect(() => divideAndFloor(5,"red")).toThrow(/^All parameters must be a number$/);
  });
  it('should throw an error if the second number is 0', () => {
    expect(() => divideAndFloor(94, 0)).toThrow(/^Second number must be greater than zero$/)
  });
});