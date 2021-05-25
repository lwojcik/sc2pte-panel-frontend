import { StarCraft2API } from 'starcraft2-api';

const unpackProfileUrls = (urls: string[], includeLocale = false) =>
  urls.map((profileUrl: string) =>
    StarCraft2API.unpackProfileUrl(profileUrl, includeLocale));

export default unpackProfileUrls;
