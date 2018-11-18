import fetch from 'cross-fetch';
import appConfig from '../constants/app';

const profileUrlRegex = /starcraft2\.com\/(?:[A-z]{2}-[A-z]{2})\/profile\/([0-9]{1})\/([0-9]{1})\/([0-9]*)/gi; // https://regexr.com/41dg9

export function determineRegionIdByRegionName(regionName) {
  switch (regionName) {
    case 'us':
      return 1;
    case 'eu':
      return 2;
    case 'kr':
      return 3;
    case 'ch':
      return 5;
    default:
      return 1;
  }
}

export function determineRegionNameById(regionId) {
  switch (regionId) {
    case '1':
      return 'us';
    case '2':
      return 'eu';
    case '3':
      return 'kr';
    case '5':
      return 'ch';
    default:
      return 'us';
  }
}

export function determineRegionLang(regionId) {
  switch (regionId) {
    case 3:
      return 'ko-kr';
    default:
      return 'en-us';
  }
}

export function constructProfileUrl(regionId, realmId, playerId) {
  const isValidPlayerId = /([0-9]*)/g;
  const isValidRealmId = /([0-9]{1})/g;

  const validPlayerId = isValidPlayerId.test(playerId);
  const validRealmId = isValidRealmId.test(realmId);

  isValidPlayerId.lastIndex = 0;
  isValidRealmId.lastIndex = 0;

  if (validPlayerId && validRealmId) {
    const profileLang = determineRegionLang(regionId);

    return `https://starcraft2.com/${profileLang}/profile/${regionId}/${realmId}/${playerId}/`;
  }
  return '';
}

export function validateProfileUrl(url) {
  const validationResult = profileUrlRegex.test(url);
  profileUrlRegex.lastIndex = 0;
  return validationResult;
}

export function unpackProfileUrl(url) {
  const urlIsValid = validateProfileUrl(url);
  if (urlIsValid) {
    const profileUrlString = url.match(profileUrlRegex);
    const profileDataArray = profileUrlRegex.exec(profileUrlString);
    profileUrlRegex.lastIndex = 0;
    const unpackedConfig = {
      regionId: profileDataArray[1],
      realmId: profileDataArray[2],
      playerid: profileDataArray[3],
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
