import StarCraft2API from 'starcraft2-api';

export interface Sc2ProfileObject {
  regionId: number;
  realmId: number;
  profileId: string;
  locale: string;
}

const constructProfileUrls = (profiles: Sc2ProfileObject[]) =>
  profiles.map((profile: Sc2ProfileObject) =>
    StarCraft2API.constructProfileUrl({ ...profile }, profile.locale));

export default constructProfileUrls;