import calculator from '../src/calculator';

// add
describe('adding positive numbers', () => {
  test('it should correctly add the two numbers', () => {
    expect(calculator.add(5, 5)).toBe(10);
  });

  test('it should not return the incorrect sum of the two numbers', () => {
    expect(calculator.add(5, 5)).not.toBe(5);
  });
});

describe('adding negative numbers', () => {
  test('it should correctly add the two numbers', () => {
    expect(calculator.add(-5, -5)).toBe(-10);
  });

  test('it should not return the incorrect sum of the two numbers', () => {
    expect(calculator.add(-5, -5)).not.toBe(-5);
  });
});

describe('adding decimal numbers', () => {
  test('it should correctly add the two numbers', () => {
    expect(calculator.add(0.5, 0.5)).toBe(1);
  });

  test('it should not return the incorrect sum of the two numbers', () => {
    expect(calculator.add(0.5, 0.5)).not.toBe(10);
  });
});

// subtract
describe('subtracting positive numbers', () => {
  test('it should correctly subtract the two numbers', () => {
    expect(calculator.subtract(15, 5)).toBe(10);
  });

  test('it should not return the incorrect difference of the two numbers', () => {
    expect(calculator.subtract(5, 5)).not.toBe(5);
  });
});

describe('subtracting negative numbers', () => {
  test('it should correctly add the two numbers', () => {
    expect(calculator.subtract(-5, -5)).toBe(0);
  });

  test('it should not return the incorrect difference of the two numbers', () => {
    expect(calculator.subtract(-5, -5)).not.toBe(-5);
  });
});

describe('subtracting decimal numbers', () => {
  test('it should correctly subtract the two numbers', () => {
    expect(calculator.subtract(1.5, 0.5)).toBe(1);
  });

  test('it should not return the incorrect difference of the two numbers', () => {
    expect(calculator.subtract(0.5, 0.5)).not.toBe(10);
  });
});

// divide
describe('Dividing positive numbers', () => {
  test('it should correctly divide the two numbers', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  test('it should not return the incorrect quotient of the two numbers', () => {
    expect(calculator.divide(4, 2)).not.toBe(5);
  });
});

describe('dividing negative numbers', () => {
  test('it should correctly divide the two numbers', () => {
    expect(calculator.divide(-10, -2)).toBe(5);
  });

  test('it should not return the incorrect quotient of the two numbers', () => {
    expect(calculator.divide(-10, -5)).not.toBe(-5);
  });
});

describe('dividing decimal numbers', () => {
  test('it should correctly divide the two numbers', () => {
    expect(calculator.divide(10.5, 2.5)).toBe(4.2);
  });

  test('it should not return the incorrect quotien of the two numbers', () => {
    expect(calculator.divide(10.5, 2.5)).not.toBe(10);
  });
});
