export type FetchMethod = 'GET' | 'POST';

interface FetchHeaders {
  [key: string]: string;
}

export interface FetchParams {
  url: string;
  method?: FetchMethod;
  headers?: FetchHeaders;
}

const fetchData = async ({ url, method, headers }: FetchParams) => {
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
