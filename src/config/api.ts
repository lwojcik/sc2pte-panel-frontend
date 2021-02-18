const { env } = process;

export default {
  url: env.REACT_APP_SC2PTE_API_URL || 'https://localhost:8883',
  version: env.REACT_APP_SC2PTE_API_VERSION || 'v2',
  endpoints: {
    config: {
      get: {
        url: env.REACT_APP_SC2PTE_CONFIG_GET_ENDPOINT || 'config',
        method: env.REACT_APP_SC2PTE_CONFIG_GET_METHOD || 'GET',
      },
      save: {
        url: env.REACT_APP_SC2PTE_CONFIG_SAVE_ENDPOINT || 'config',
        method: env.REACT_APP_SC2PTE_CONFIG_SAVE_METHOD || 'POST',
      },
    },
    viewer: {
      get: {
        url: env.REACT_APP_SC2PTE_VIEWER_GET_ENDPOINT || 'viewer',
        method: env.REACT_APP_SC2PTE_VIEWER_GET_METHOD || 'GET',
      },
    },
  },
};
