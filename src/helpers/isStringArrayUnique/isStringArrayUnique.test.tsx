import isStringArrayUnique from './isStringArrayUnique';

const uniqueList = [
  '1',
  '2',
  '3',
];

const nonUniqueList = [
  '1',
  '2',
  '2',
  '3',
];

it('returns true for unique string array', () => {
  expect(isStringArrayUnique(uniqueList)).toBe(true);
});

it('returns false for non-unique string array', () => {
  expect(isStringArrayUnique(nonUniqueList)).toBe(false);
});