import { FetchParams } from 'types';

const fetchData = async ({
  url,
  method,
  headers,
}: FetchParams) => {
  try {
    // I'm not exactly happy about this hack
    // but I'm desperate to prevent unnecessary fetches
    // before I figure out what's with unintended rerenders
    if (!(headers as any).channelId) {
      return Promise.resolve({});
    }

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
