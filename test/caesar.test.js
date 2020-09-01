import caesar from '../src/caesar';

test('it should return wrap letters from z to a ', () => {
  expect(caesar('z', 1)).toMatch('a');
});

test('it should return the words keeping the same case  ', () => {
  expect(caesar('dog', 1)).not.toMatch('Eph');
});


describe('It should keep the same case', () => {
  test('it should return the words keeping the same case  ', () => {
    expect(caesar('dog', 1)).toMatch('eph');
  });

  test('it should return the words keeping the same case  ', () => {
    expect(caesar('dog', 1)).not.toMatch('Eph');
  });
});

test('it should return the words keeping the same case  ', () => {
  expect(caesar('abc', 1)).toMatch('bcd');
});
