const version = 13;


const clone = require('clone');

module.exports = {
  version,

  migrate: function(originalVersionedData) {
    const versionedData = clone(originalVersionedData);
    versionedData.meta.version = version;
    try {
      const state = versionedData.data;
      versionedData.data = transformState(state);
    } catch (err) {
      console.warn(`AuraMask Migration #${version}` + err.stack);
    }
    return Promise.resolve(versionedData);
  },
};

function transformState(state) {
  const newState = state;
  const {config} = newState;
  if (config && config.provider) {
    if (config.provider.type === 'testnet') {
      newState.config.provider.type = 'localhost';
    }
  }
  return newState;
}
