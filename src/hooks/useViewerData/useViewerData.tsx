import getViewerUrl from 'src/helpers/getViewerUrl/getViewerUrl';
import useData from 'src/hooks/useData/useData';
import { ProfileObject } from 'src/components/Profile/Profile';

export interface ViewerData {
  channelId: string;
  data: {
    profiles: ProfileObject[];
  }
  error?: Boolean;
}

const useViewerData = (channelId: string, token: string) => {
  const { url, method } = getViewerUrl(channelId);
  const headers = { channelId, token };
  const { data, error } = useData({ url, method, headers }) as ViewerData;
  console.log(data);
  return error
    ? {
      channelId,
      error: true,
      data: {
        profiles: [],
      },
    }
    : data;
}

export default useViewerData;
