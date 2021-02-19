import styling from './styling';

it('exports styling object', () => {
  expect(styling).toMatchSnapshot();
});
