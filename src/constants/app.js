const API_URL = process.env.REACT_APP_SC2PTE_API_URL;
const API_VERSION = process.env.REACT_APP_SC2PTE_API_VERSION;

module.exports = {
  api: {
    url: API_URL,
    version: API_VERSION,
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
