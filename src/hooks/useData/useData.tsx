import useSWR from 'swr';
import fetchData from 'helpers/fetchData/fetchData';
import { FetchMethod } from 'types';

interface UseDataParams {
  url: string;
  method: FetchMethod;
  headers?: {
    [key: string]: string;
  };
  refreshInterval?: number;
}

const useData = ({
  url,
  method,
  headers,
  refreshInterval,
}: UseDataParams) =>
  useSWR(
    url,
    // istanbul ignore next
    () => fetchData({ url, method, headers }),
    {
      refreshInterval: (refreshInterval as number * 1000) || 0,
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      suspense: true,
    }
  ) as unknown;

export default useData;
