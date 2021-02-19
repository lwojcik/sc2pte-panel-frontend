import strings from './strings';

it('exports strings object', () => {
  expect(strings).toMatchSnapshot();
});
