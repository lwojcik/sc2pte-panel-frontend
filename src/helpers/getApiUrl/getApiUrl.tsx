import { FetchMethod } from 'src/helpers/fetchData/fetchData';
import apiConfig from 'src/config/api';

interface GetApiUrlParams {
  type: 'config' | 'viewer';
  activity: 'get' | 'save';
  channelId: string;
}

const getApiUrl = ({ channelId, type, activity }: GetApiUrlParams) => {
  const { url, version, endpoints } = apiConfig;
  const endpointByActivity = (type === 'config')
    ? endpoints.config[activity]
    : endpoints.viewer.get;
  const apiUrl = `${url}/${version ? `${version}/` : ''}${endpointByActivity.url}/${channelId}`;
  const method = endpointByActivity.method as FetchMethod;
  return { url: apiUrl, method };
}

export default getApiUrl;