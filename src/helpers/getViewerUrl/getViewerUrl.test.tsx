import getViewerUrl from 'src/helpers/getViewerUrl/getViewerUrl';

jest.mock('src/helpers/getApiUrl/getApiUrl', () => 
  jest.fn().mockImplementation(() => ({
    url: 'testViewerUrl',
    method: 'TEST_VIEWER_METHOD',
  })));


it('returns correct viewer API URL', () => {
  expect(getViewerUrl('123')).toMatchSnapshot();
});

