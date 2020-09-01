import capitalize from '../src/capitalize';

test('it should return the given string with the first character capitalized', () => {
  expect(capitalize('hello')).toMatch('Hello');
});

test('it should not return the given string with the last character capitalized', () => {
  expect(capitalize('hello')).not.toMatch('hellO');
});

describe('when only one character is given', () => {
  test('it should capitalize the character', () => {
    expect(capitalize('a')).toMatch('A');
  });

  test('it not should not return the character unchanged', () => {
    expect(capitalize('a')).not.toMatch('a');
  });
});

describe('when two words are given', () => {
  test('it should capitalize the first character of the first word', () => {
    expect(capitalize('good morning')).toMatch('Good morning');
  });

  test('it not should not capitalize the the first character of both words', () => {
    expect(capitalize('good morning')).not.toMatch('Good Morning');
  });
});
