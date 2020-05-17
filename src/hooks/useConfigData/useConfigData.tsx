import getConfigUrl from 'helpers/getConfigUrl/getConfigUrl';
import useData from 'hooks/useData/useData';
import constructProfileUrls from 'helpers/constructProfileUrls/constructProfileUrls';
import { Sc2ProfileObject } from 'types';

interface InitialConfigObject {
  error: null | undefined;
  data: {
    profiles: Sc2ProfileObject[] | [];
    maxProfiles: number;
  }
}

const useConfigData = (channelId: string, token: string) => {
  const { url, method } = getConfigUrl(channelId);
  const headers = { channelId, token };
  const { error, data } = useData({ url, method, headers }) as InitialConfigObject;
  return !error && data && data.profiles
    ? {
      data: {
        profiles: data.profiles?.length > 0
          ? constructProfileUrls(data.profiles)
          : [],
        maxProfiles: data.maxProfiles,
      },
    }
    : {
      error: true,
      data: {
        profiles: [],
        maxProfiles: 0,
      },
    };
};

export default useConfigData;
