import getViewerUrl from 'helpers/getViewerUrl/getViewerUrl';

jest.mock('src/helpers/getApiUrl/getApiUrl', () =>
  jest.fn().mockImplementationOnce(() => ({
    url: 'testViewerUrl',
    method: 'TEST_VIEWER_METHOD',
  })));

it('returns correct viewer API URL', () => {
  expect(getViewerUrl('123')).toMatchSnapshot();
});
