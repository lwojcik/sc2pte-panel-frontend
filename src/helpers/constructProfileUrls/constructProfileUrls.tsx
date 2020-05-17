import StarCraft2API, { PlayerObject }  from 'starcraft2-api';

const constructProfileUrls = (profiles: PlayerObject[]) =>
  profiles.map((profile: PlayerObject) =>
    StarCraft2API.constructProfileUrl({ ...profile }, profile.locale));

export default constructProfileUrls;
