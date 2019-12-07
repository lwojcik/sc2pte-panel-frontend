import getApiUrl from 'src/helpers/getApiUrl/getApiUrl';

const saveConfigUrl = (channelId: string) =>
  getApiUrl({ channelId, type: 'config', activity: 'save' });

export default saveConfigUrl;