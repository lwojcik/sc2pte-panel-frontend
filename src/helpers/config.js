import fetch from 'cross-fetch';
import appConfig from '../constants/app';

const legacyProfileUrlRegex = /(eu|us|kr)\.battle\.net\/sc2\/[a-z]{2}\/profile\/([0-9]*)\/([0-9]{1})\/([^/?\t\r\n]*)/gi; // https://regexr.com/3v81r
const newProfileUrlRegex = /starcraft2\.com\/(?:[A-z]{2}-[A-z]{2})\/profile\/([0-9]{1})\/([0-9]{1})\/([0-9]*)/gi; // https://regexr.com/41dg9

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

export function determineIdByServerName(server) {
  switch (server) {
    case 'us':
      return 1;
    case 'eu':
      return 2;
    case 'kr':
      return 3;
    default:
      return 1;
  }
}

export function determineServerNameById(server) {
  switch (server) {
    case '1':
      return 'us';
    case '2':
      return 'eu';
    case '3':
      return 'kr';
    default:
      return 'us';
  }
}

export function constructNewProfileUrl(server, playerId, region) {
  const serverId = determineIdByServerName(server);

  const isValidPlayerId = /([0-9]*)/g;
  const isValidRegion = /([0-9]{1})/g;

  const validPlayerId = isValidPlayerId.test(playerId);
  const validRegion = isValidRegion.test(region);

  isValidPlayerId.lastIndex = 0;
  isValidRegion.lastIndex = 0;

  if (validPlayerId && validRegion) {
    const profileLang = serverId === 3 ? 'kr-kr' : 'en-us';

    return `https://starcraft2.com/${profileLang}/profile/${serverId}/${region}/${playerId}/`;
  }
  return '';
}

export function constructProfileUrl(server, playerId, region, name) {
  return constructNewProfileUrl(server, playerId, region, name);
}

export function validateLegacyProfileUrl(url) {
  const validationResult = legacyProfileUrlRegex.test(url);
  legacyProfileUrlRegex.lastIndex = 0;
  return validationResult;
}

export function validateNewProfileUrl(url) {
  const validationResult = newProfileUrlRegex.test(url);
  newProfileUrlRegex.lastIndex = 0;
  return validationResult;
}

export function unpackLegacyProfileUrl(url) {
  const urlIsValid = validateLegacyProfileUrl(url);
  if (urlIsValid) {
    const profileUrlString = url.match(legacyProfileUrlRegex);
    const profileDataArray = legacyProfileUrlRegex.exec(profileUrlString);
    legacyProfileUrlRegex.lastIndex = 0;
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


export function unpackNewProfileUrl(url) {
  const urlIsValid = validateNewProfileUrl(url);
  if (urlIsValid) {
    const profileUrlString = url.match(newProfileUrlRegex);
    const profileDataArray = newProfileUrlRegex.exec(profileUrlString);
    newProfileUrlRegex.lastIndex = 0;
    const unpackedConfig = {
      server: determineServerNameById(profileDataArray[1]),
      region: profileDataArray[2],
      playerid: profileDataArray[3],
    };

    return unpackedConfig;
  }
  return false;
}

export function unpackProfileUrl(url) {
  if (validateLegacyProfileUrl(url)) {
    return unpackLegacyProfileUrl(url);
  }
  return unpackNewProfileUrl(url);
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
