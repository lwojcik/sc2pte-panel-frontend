const app = {
  defaultLanguage: process.env.REACT_APP_DEFAULT_LANGUAGE || 'en',
  refreshInterval: Number(process.env.REACT_APP_UPDATE_INTERVAL_MS) || 600000,
  enableTwitchAuth: (process.env.REACT_APP_ENABLE_TWITCH_AUTH === 'true') || false,
  maxProfiles: Number(process.env.REACT_APP_MAXIMUM_PLAYER_PROFILE_COUNT) || 3,
};

export default app;
