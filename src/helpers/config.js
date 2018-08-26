import fetch from 'cross-fetch';
import appConfig from '../constants/app';

export async function getConfig(channelId, token) {
  try {
    const apiUrl = `${appConfig.api.url}/${appConfig.api.version}`;
    const fetchConfigUrl = `${apiUrl}/${appConfig.config.fetch.endpoint}/${channelId}`;
    const response = await fetch(fetchConfigUrl, {
      method: appConfig.config.fetch.method,
      headers: {
        token,
      },
    });
    const config = await response.json();
    return config;
  } catch (error) {
    return error;
  }
}

export async function saveConfig(channelId, configObject) {
  try {
    const apiUrl = `${appConfig.api.url}/${appConfig.api.version}`;
    const saveConfigUrl = `${apiUrl}/${appConfig.config.save.endpoint}/${channelId}`;
    const response = await fetch(saveConfigUrl, {
      method: appConfig.config.save.method,
      headers: {
        ...configObject,
      },
    });
    const saveConfigStatus = await response.json();
    return saveConfigStatus;
  } catch (error) {
    return error;
  }
}
