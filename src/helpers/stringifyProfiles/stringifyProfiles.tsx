import StarCraft2API from 'starcraft2-api';

const stringifyProfiles = (urls: string[], includeLocale = false) =>
  urls.map((profileUrl: string) =>
    JSON.stringify(StarCraft2API.unpackProfileUrl(profileUrl, includeLocale)));

export default stringifyProfiles;