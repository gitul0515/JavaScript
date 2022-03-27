const Calculator = require('../calculator.js');
describe('Calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });

  it('inits with 0', () => {
    expect(calculator.value).toBe(0);
  });

  it('set', () => {
    calculator.set(100);
    expect(calculator.value).toBe(100);
    calculator.set(-100);
    expect(calculator.value).toBe(-100)
  });

  it('clear', () => {
    calculator.clear();
    expect(calculator.value).toBe(0);
  });

  it('add', () => {
    calculator.add(50);
    expect(calculator.value).toBe(50);
  });

  it('add should throw an error if value is greater than 100', () => {
    expect(() => calculator.add(101)).toThrow('Value can not be greater than 100');
  });

  it('subtract', () => {
    calculator.subtract(50);
    expect(calculator.value).toBe(-50);
  });

  it('multiply', () => {
    calculator.set(1);
    calculator.multiply(100);
    expect(calculator.value).toBe(100);
    calculator.set(2);
    calculator.multiply(-0.5);
    expect(calculator.value).toBe(-1);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      calculator.divide(0);
      expect(calculator.value).toBe(NaN);
    });

    it('1 / 0 === Infinity', () => {
      calculator.set(1);
      calculator.divide(0);
      expect(calculator.value).toBe(Infinity);
    });

    it('4 / 4 === 1', () => {
      calculator.set(4);
      calculator.divide(4);
      expect(calculator.value).toBe(1);
    });
  })
});
