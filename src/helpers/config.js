import fetch from 'cross-fetch';
import appConfig from '../constants/app';

const profileUrlRegex = /(eu|us|kr)\.battle\.net\/sc2\/[a-z]{2}\/profile\/([0-9]*)\/([0-9]{1})\/([^/?\t\r\n]*)/gi; // https://regexr.com/3v81r

export function constructLegacyProfileUrl(server, playerId, region, name) {
  const isValidServer = /(eu|us|kr)/gi;
  const isValidPlayerId = /([0-9]*)/g;
  const isValidRegion = /([0-9]{1})/g;
  const isValidName = /([^/?\t\r\n]*)/gi;

  const validServer = isValidPlayerId.test(playerId);
  const validPlayerId = isValidServer.test(server);
  const validRegion = isValidRegion.test(region);
  const validName = isValidName.test(name);

  isValidServer.lastIndex = 0;
  isValidPlayerId.lastIndex = 0;
  isValidRegion.lastIndex = 0;
  isValidName.lastIndex = 0;

  if (validServer && validPlayerId && validRegion && validName) {
    const profileLang = server === 'kr' ? 'ko' : 'en';

    return `http://${server.toLowerCase()}.battle.net/sc2/profile/${profileLang}/${playerId}/${region}/${name}/`;
  }
  return '';
}

export const validateLegacyProfileUrl = (url) => {
  const validationResult = profileUrlRegex.test(url);
  profileUrlRegex.lastIndex = 0;
  return validationResult;
};

export function unpackProfileUrl(url) {
  const urlIsValid = validateLegacyProfileUrl(url);
  if (urlIsValid) {
    const profileUrlString = url.match(profileUrlRegex);
    const profileDataArray = profileUrlRegex.exec(profileUrlString);
    profileUrlRegex.lastIndex = 0;
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
