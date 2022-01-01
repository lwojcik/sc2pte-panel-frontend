import { StarCraft2API, PlayerObject, ProfileUrlLocale } from "starcraft2-api";

const constructProfileUrls = (profiles: PlayerObject[]) =>
  profiles.map((profile: PlayerObject) =>
    StarCraft2API.constructProfileUrl(
      { ...profile },
      profile.locale as ProfileUrlLocale
    )
  );

export default constructProfileUrls;
