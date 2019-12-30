import capitalize from './capitalize';

it('should capitalize strings correctly', () => {
  expect(capitalize('testString1')).toBe('TestString1');
  expect(capitalize('TestString2')).toBe('TestString2');
  expect(capitalize('1TestString3')).toBe('1TestString3');
});
