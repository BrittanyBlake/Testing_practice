import capitalize from '../src/capitalize';

test('it should return the given string with the first character capitalized', () => {
    expect(capitalize('hello')).toMatch('Hello');
});

test("it should not return the given string with the last character capitalized", () => {
  expect(capitalize("hello")).not.toMatch("hellO");
});