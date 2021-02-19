import getConfigUrl from 'helpers/getConfigUrl/getConfigUrl';
import useData from 'hooks/useData/useData';
import constructProfileUrls from 'helpers/constructProfileUrls/constructProfileUrls';
import { Sc2ProfileObject } from 'types';

interface InitialConfigObject {
  error: null | undefined;
  data: {
    profiles: Sc2ProfileObject[] | [];
    maxProfiles: number;
    error?: Boolean;
    status?: number;
  }
}

const useConfigData = (channelId: string, token: string) => {
  const { url, method } = getConfigUrl(channelId);
  const headers = { channelId, token };
  const { error, data } = useData({
    url,
    method,
    headers,
  }) as InitialConfigObject;
  const serverError = error || (data.error && data.status === 500);
  return !serverError
    ? {
      data: {
        profiles: data.profiles?.length > 0
          ? constructProfileUrls(data.profiles)
          : [],
      },
    }
    : {
      error: true,
      data: {
        profiles: [],
      },
    };
};

export default useConfigData;
