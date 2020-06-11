import getViewerUrl from 'helpers/getViewerUrl/getViewerUrl';
import useData from 'hooks/useData/useData';
import { ViewerData } from 'types';

const useViewerData = (channelId: string, token: string, refreshInterval: number) => {
  const { url, method } = getViewerUrl(channelId);
  const headers = { channelId, token };
  const { data, error } = useData({ url, method, headers, refreshInterval }) as ViewerData;
  return error
    ? {
      channelId,
      error: true,
      data: {
        profiles: [],
      },
    }
    : data;
};

export default useViewerData;
