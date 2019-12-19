import isProfileListUnique from './isProfileListUnique';

const uniqueList = [
  'https://starcraft2.com/en-us/profile/1/1/5457837',
  'https://starcraft2.com/en-us/profile/2/1/5457837',
  'https://starcraft2.com/en-us/profile/3/1/5457837',
];

const nonUniqueList = [
  'https://starcraft2.com/en-us/profile/1/1/5457837',
  'https://starcraft2.com/pl-pl/profile/1/1/5457837',
  'https://starcraft2.com/en-us/profile/3/1/5457837',
];

it('returns true for unique profile list', () => {
  expect(isProfileListUnique(uniqueList)).toBe(true);
});

it('returns false for non-unique profile list', () => {
  expect(isProfileListUnique(nonUniqueList)).toBe(false);
});
