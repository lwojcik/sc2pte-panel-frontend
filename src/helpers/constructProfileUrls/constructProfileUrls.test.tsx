import constructProfileUrls from './constructProfileUrls';

const profiles = [
  {
    regionId: 1,
    realmId: 1,
    profileId: '123',
    locale: 'en-us',
  },
  {
    regionId: 2,
    realmId: 2,
    profileId: '456',
    locale: 'ru-ru',
  },
  {
    regionId: 3,
    realmId: 1,
    profileId: '789',
    locale: 'pl-pl',
  }
];

it('constructs valid SC2 profiles', () => {
  expect(constructProfileUrls(profiles)).toMatchSnapshot();
});