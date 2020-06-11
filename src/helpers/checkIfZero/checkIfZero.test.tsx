import checkIfZero from './checkIfZero';

it('should return true for zero', () => {
  expect(checkIfZero(0)).toBe(true);
});

it('should return false for NaN', () => {
  expect(checkIfZero('nan' as any)).toBe(false);
});
