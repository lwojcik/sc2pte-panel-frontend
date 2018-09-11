import fetch from 'cross-fetch';
import appConfig from '../constants/app';

const profileUrlRegex = /(eu|us|kr)\.battle\.net\/sc2\/[a-z]{2}\/profile\/([0-9]*)\/([0-9]{1})\/([^/?\t\r\n]*)/gi; // https://regexr.com/3v88p

export function constructProfileUrl(server, playerId, region, name) {
  const validServer = /(eu|us|kr)/gi.test(server.toLowerCase());
  const validPlayerId = /([0-9]*)/g.test(playerId);
  const validRegion = /([0-9]{1})/g.test(region);
  const validName = /([^/?\t\r\n]*)/gi.test(name);

  if (validServer && validPlayerId && validRegion && validName) {
    return `http://${server.toLowerCase()}.battle.net/${playerId}/${region}/${name}`;
  }
  return '';
}

export const validateProfileUrl = (url) => { // eslint-disable-line arrow-body-style
  return profileUrlRegex.test(url) ? true : '';
};

export function unpackProfileUrl(url) {
  const urlIsValid = validateProfileUrl(url);
  if (urlIsValid) {
    const profileUrlString = url.match(profileUrlRegex);
    const profileDataArray = profileUrlRegex.exec(profileUrlString);
    const unpackedConfig = {
      server: profileDataArray[1],
      playerid: profileDataArray[2],
      region: profileDataArray[3],
      name: profileDataArray[4],
    };

    return unpackedConfig;
  }
  return false;
}

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
