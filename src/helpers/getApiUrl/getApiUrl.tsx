import { FetchMethod } from 'src/helpers/fetchData/fetchData';
import api from 'src/config/api';

export type ApiUrlType = 'config' | 'viewer';
export type ApiActivity = 'get' | 'save';

interface GetApiUrlParams {
  type: ApiUrlType;
  activity: ApiActivity;
  channelId: string;
}

const getApiUrl = ({ channelId, type, activity }: GetApiUrlParams) => {
  const { url, version, endpoints } = api;
  const endpointByActivity = (type === 'config')
    ? endpoints.config[activity]
    : endpoints.viewer.get;
  const apiUrl = `${url}/${version}/${endpointByActivity.url}/${channelId}`;
  const method = endpointByActivity.method as FetchMethod;
  return { url: apiUrl, method };
}

export default getApiUrl;