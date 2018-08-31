const version = 20;

/*

This migration ensures previous installations
get a `firstTimeInfo` key on the auramask state,
so that we can version notices in the future.

*/

const clone = require('clone');

module.exports = {
  version,

  migrate: function(originalVersionedData) {
    const versionedData = clone(originalVersionedData);
    versionedData.meta.version = version;
    try {
      const state = versionedData.data;
      const newState = transformState(state);
      versionedData.data = newState;
    } catch (err) {
      console.warn(`AuraMask Migration #${version}` + err.stack);
    }
    return Promise.resolve(versionedData);
  },
};

function transformState(state) {
  const newState = state;
  if ('auramask' in newState &&
    !('firstTimeInfo' in newState.auramask)) {
    newState.auramask.firstTimeInfo = {
      version: '3.12.0',
      date: Date.now(),
    };
  }
  return newState;
}

