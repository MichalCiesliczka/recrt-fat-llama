import { createStore, compose, applyMiddleware } from 'redux';

/* eslint-disable no-underscore-dangle */
/* redux devtools configuration */
const composeEnhancers = process.env.NODE_ENV === 'development' ?
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) :
  compose;
/* eslint-enable */
const configureStore = (rootReducer, initialState = {}) => {
  const middleware = [];

  const store = {
    ...createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(...middleware)),
    ),
  };

  if (process.env.NODE_ENV === 'development' && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return { store };
};

export default configureStore;
