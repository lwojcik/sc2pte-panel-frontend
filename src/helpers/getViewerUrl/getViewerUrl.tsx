import getApiUrl from 'helpers/getApiUrl/getApiUrl';

const getViewerUrl = (channelId: string) =>
  getApiUrl({ channelId, type: 'viewer', activity: 'get' });

export default getViewerUrl;
