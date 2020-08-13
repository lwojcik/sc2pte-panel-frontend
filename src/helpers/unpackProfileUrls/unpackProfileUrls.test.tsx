import unpackProfileUrls from './unpackProfileUrls';

const urls = [
  'https://starcraft2.com/en-us/profile/1/1/123456789',
  'https://starcraft2.com/en-us/profile/2/1/234567890',
  'https://starcraft2.com/en-us/profile/3/1/345678901',
];

it('unpacks profile URLs correctly', () => {
  expect(unpackProfileUrls(urls)).toMatchSnapshot();
});
