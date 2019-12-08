import saveConfigUrl from 'src/helpers/saveConfigUrl/saveConfigUrl';

jest.mock('src/helpers/getApiUrl/getApiUrl', () => {
  return jest.fn().mockImplementation(() => ({
    url: 'testSaveConfigUrl',
    method: 'TEST_SAVE_CONFIG_METHOD',
  }));
});


it('returns correct save config API URL', () => {
  expect(saveConfigUrl('123')).toMatchSnapshot();
});