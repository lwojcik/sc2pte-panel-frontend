import fetchData from './fetchData';

beforeEach(() => {
  global.fetch.resetMocks();
});

it('fetches data correctly when no method is provided', async () => {
  global.fetch.mockResponseOnce(JSON.stringify({
    status: 200,
    message: 'Mocked data for fetchData "GET" request',
  }));

  const response = await fetchData({
    url: 'http://example.com',
  });

  expect(response).toMatchSnapshot();
});
it('fetches data correctly for "GET" request', async () => {
  global.fetch.mockResponseOnce(JSON.stringify({
    status: 200,
    message: 'Mocked data for fetchData "GET" request',
  }));

  const response = await fetchData({
    url: 'http://example.com',
    method: 'GET',
  });

  expect(response).toMatchSnapshot();
});

it('fetches data correctly for "POST" request', async () => {
  global.fetch.mockResponseOnce(JSON.stringify({
    status: 200,
    message: 'Mocked data for fetchData "POST" request',
  }));

  const response = await fetchData({
    url: 'http://example.com',
    method: 'POST',
  });

  expect(response).toMatchSnapshot();
});

it('returns error object when request fails', async () => {
  global.fetch.mockResponseOnce(Error('mocked_fetch_error'));

  const response = await fetchData({
    url: 'http://example.com',
    method: 'POST',
  });

  expect(response).toMatchSnapshot();
});