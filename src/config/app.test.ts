import app from './app';

it('exports app config object', () => {
  expect(app).toMatchSnapshot();
});
