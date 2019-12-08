import getConfigUrl from 'src/helpers/getConfigUrl/getConfigUrl';

jest.mock('src/helpers/getApiUrl/getApiUrl', () =>
  jest.fn().mockImplementation(() => ({
    url: 'testConfigUrl',
    method: 'TEST_CONFIG_METHOD',
  })));


it('returns correct config API URL', () => {
  expect(getConfigUrl('123')).toMatchSnapshot();
});
