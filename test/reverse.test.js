import reverseString from '../src/reverse';

test('returns reversed string', () => {
  expect(reverseString('hello')).toMatch('olleh');
});

test('reverses multiple words', () => {
  expect(reverseString('inherent resolve')).toMatch('evloser tnerehni');
});

test("The string shouldn't match it's original order", () => {
  expect(reverseString('hello')).not.toMatch('hello');
});
