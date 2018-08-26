import fetch from 'cross-fetch';
import appConfig from '../constants/app';

export default async function getViewerData(channelId, token) {
  try {
    const apiUrl = `${appConfig.api.url}/${appConfig.api.version}`;
    const fetchViewerDataUrl = `${apiUrl}/${appConfig.viewer.fetch.endpoint}/${channelId}`;
    const response = await fetch(fetchViewerDataUrl, {
      method: appConfig.viewer.fetch.method,
      headers: {
        token,
      },
    });
    const viewerData = await response.json();
    return viewerData;
  } catch (error) {
    return {
      status: 500,
      message: 'Error while getting viewer data',
    };
  }
}
