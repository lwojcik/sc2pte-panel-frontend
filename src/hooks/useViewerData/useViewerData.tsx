import getViewerUrl from 'helpers/getViewerUrl/getViewerUrl';
import useData from 'hooks/useData/useData';
import { ViewerData } from 'types';

interface ViewerDataParams {
  channelId: string;
  token: string;
  refreshInterval?: number;
}

const useViewerData = ({
  channelId,
  token,
  refreshInterval,
}: ViewerDataParams) => {
  const { url, method } = getViewerUrl(channelId);
  const headers = { channelId, token };

  const { data, error } = useData({
    url,
    method,
    headers,
    refreshInterval,
  }) as ViewerData;
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
