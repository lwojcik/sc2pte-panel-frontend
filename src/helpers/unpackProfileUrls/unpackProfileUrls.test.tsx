import unpackProfileUrls from './unpackProfileUrls';

const urls = [
  'https://starcraft2.com/en-us/profile/1/1/1',
  'https://starcraft2.com/en-us/profile/2/1/2',
  'https://starcraft2.com/en-us/profile/3/1/3',
]

it('unpacks profile URLs correctly', () => {
  expect(unpackProfileUrls(urls)).toMatchSnapshot();
});