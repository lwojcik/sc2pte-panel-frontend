import saveConfigUrl from 'helpers/saveConfigUrl/saveConfigUrl';

jest.mock('src/helpers/getApiUrl/getApiUrl', () =>
  jest.fn().mockImplementationOnce(() => ({
    url: 'testSaveConfigUrl',
    method: 'TEST_SAVE_CONFIG_METHOD',
  })));

it('returns correct save config API URL', () => {
  expect(saveConfigUrl('123')).toMatchSnapshot();
});
