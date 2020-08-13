import api from './api';

it('exports api object', () => {
  expect(api).toMatchSnapshot();
});
