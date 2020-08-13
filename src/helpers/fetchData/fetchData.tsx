import { FetchParams } from 'types';

const fetchData = async ({
  url,
  method,
  headers,
}: FetchParams) => {
  try {
    const response = await fetch(url, {
      method: method || 'GET',
      headers,
    });
    return await response.json();
  } catch {
    return {
      error: true,
      status: 500,
    };
  }
};

export default fetchData;
