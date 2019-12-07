import getConfigUrl from 'src/helpers/getConfigUrl/getConfigUrl';
import useData from 'src/hooks/useData/useData';
import constructProfileUrls, { Sc2ProfileObject } from 'src/helpers/constructProfileUrls/constructProfileUrls';

interface InitialConfigObject {
  error: null | undefined;
  profiles: Sc2ProfileObject[] | [];
}

const useConfigData = (channelId: string, token: string) => {
  const { url, method } = getConfigUrl(channelId);
  const headers = { channelId, token };
  const data = useData({ url, method, headers }) as InitialConfigObject;
  
  return !data.error
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
    }
}

export default useConfigData;
