import fetchData from './fetchData';

const fetch = global.fetch as any;

const request = {
  url: 'http://example.com',
  headers: {
    channelId: '123',
    token: '456',
  },
};

const successfulResponse = (method: 'GET' | 'POST') =>
  JSON.stringify({
    status: 200,
    message: `Mocked data for fetchData "${method}" request`,
  });

beforeEach(() => {
  fetch.resetMocks();
});

it('fetches data correctly when no method is provided', async () => {
  fetch.mockResponseOnce(successfulResponse('GET'));

  const response = await fetchData(request);

  expect(response).toMatchSnapshot();
});

it('fetches data correctly for "GET" request', async () => {
  fetch.mockResponseOnce(successfulResponse('GET'));

  const response = await fetchData({
    ...request,
    method: 'GET',
  });

  expect(response).toMatchSnapshot();
});

it('fetches data correctly for "POST" request', async () => {
  fetch.mockResponseOnce(successfulResponse('POST'));

  const response = await fetchData({
    ...request,
    method: 'POST',
  });

  expect(response).toMatchSnapshot();
});

it('returns error object when request fails', async () => {
  fetch.mockResponseOnce(Error('mocked_fetch_error'));

  const response = await fetchData(request);

  expect(response).toMatchSnapshot();
});

it('returns an empty object when request contains no channel id', async () => {
  fetch.mockResponseOnce({});

  const response = await fetchData({
    url: 'http://example.com',
    headers: {},
  });

  expect(response).toMatchSnapshot();
});
