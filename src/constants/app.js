const API_URL = process.env.REACT_APP_SC2PTE_API_URL;

module.exports = {
  api: {
    url: API_URL,
    version: 'v1.1',
  },
  config: {
    fetch: {
      endpoint: 'config/get',
      method: 'GET',
    },
    save: {
      endpoint: 'config/save',
      method: 'POST',
    },
  },
  viewer: {
    fetch: {
      endpoint: 'viewer/get',
      method: 'GET',
    },
  },
};
