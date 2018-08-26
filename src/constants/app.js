const API_URL = process.env.REACT_APP_SC2PTE_API_URL;

module.exports = {
  api: {
    url: API_URL,
    version: 'v0',
  },
  config: {
    fetch: {
      endpoint: 'config',
      method: 'GET',
    },
    save: {
      endpoint: 'config',
      method: 'POST',
    },
  },
  viewer: {
    fetch: {
      endpoint: 'viewer',
      method: 'GET',
    },
  },
};
