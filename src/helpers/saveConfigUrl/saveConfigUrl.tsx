import getApiUrl from 'helpers/getApiUrl/getApiUrl';

const saveConfigUrl = (channelId: string) =>
  getApiUrl({ channelId, type: 'config', activity: 'save' });

export default saveConfigUrl;
