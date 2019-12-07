import stringifyProfiles from './stringifyProfiles';

const urls = [
  'https://starcraft2.com/en-us/profile/1/1/1084304',
  'https://starcraft2.com/en-us/profile/2/1/1084304',
  'https://starcraft2.com/en-us/profile/3/1/1084304'
]

it('renders correctly', () => {
  expect(stringifyProfiles(urls)).toMatchSnapshot();
});