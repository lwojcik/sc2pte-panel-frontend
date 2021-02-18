import api from 'config/api';
import {
  FetchMethod,
  ApiUrlType,
  ApiActivity,
} from 'types';

interface GetApiUrlParams {
  type: ApiUrlType;
  activity: ApiActivity;
  channelId: string;
}

const getApiUrl = ({ channelId, type, activity }: GetApiUrlParams) => {
  const {
    url,
    version,
    endpoints,
  } = api;
  const endpointByActivity = (type === 'config')
    ? endpoints.config[activity]
    : endpoints.viewer.get;
  const apiUrl = `${url}/${version}/${endpointByActivity.url}/${channelId}`;
  const method = endpointByActivity.method as FetchMethod;
  return {
    url: apiUrl,
    method,
  };
};

export default getApiUrl;
