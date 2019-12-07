const api = {
  url: process.env.REACT_APP_SC2PTE_API_URL || 'https://localhost:8883',
  version: process.env.REACT_APP_SC2PTE_API_VERSION || 'v2',
  endpoints: {
    config: {
      get: {
        url: process.env.REACT_APP_SC2PTE_CONFIG_GET_ENDPOINT || 'config',
        method: process.env.REACT_APP_SC2PTE_CONFIG_GET_METHOD || 'GET',
      },
      save: {
        url: process.env.REACT_APP_SC2PTE_CONFIG_SAVE_ENDPOINT || 'config',
        method: process.env.REACT_APP_SC2PTE_CONFIG_SAVE_METHOD || 'POST',
      },
    },
    viewer: {
      get: {
        url: process.env.REACT_APP_SC2PTE_VIEWER_GET_ENDPOINT || 'viewer',
        method: process.env.REACT_APP_SC2PTE_VIEWER_GET_METHOD || 'GET',
      },
    },
  },
};

export default api;