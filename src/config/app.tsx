const app = {
  defaultLanguage: process.env.REACT_APP_DEFAULT_LANGUAGE || 'en',
  updateInterval: Number(process.env.REACT_APP_UPDATE_INTERVAL) || 480000,
  enableTwitchAuth: (process.env.REACT_APP_ENABLE_TWITCH_AUTH === 'true') || false,
  enableLocalStorageCache: (process.env.REACT_APP_ENABLE_LOCALSTORAGE_CACHE === 'true') || false,
  localStorageCacheKey: process.env.REACT_APP_LOCALSTORAGE_CACHE_KEY || 'sc2pte20test',
  maxProfiles: Number(process.env.REACT_APP_MAXIMUM_PLAYER_PROFILE_COUNT) || 3,
};

export default app;
