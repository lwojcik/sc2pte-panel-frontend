import phrases from './phrases';

it('exports phrases config object', () => {
  expect(phrases).toMatchSnapshot();
});
