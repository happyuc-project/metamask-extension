const createStore = require('redux').createStore;
const applyMiddleware = require('redux').applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const rootReducer = require('./reducers');
const createLogger = require('redux-logger').createLogger;

global.AURAMASK_DEBUG = process.env.AURAMASK_DEBUG;

module.exports = configureStore;

const loggerMiddleware = createLogger({
  predicate: () => global.AURAMASK_DEBUG,
});

const middlewares = [thunkMiddleware, loggerMiddleware];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
