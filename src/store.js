import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

/* eslint-disable no-underscore-dangle */
/* redux devtools configuration */
const composeEnhancers = process.env.NODE_ENV === 'development'
  ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
  : compose;
/* eslint-enable */

const sagaMiddleware = createSagaMiddleware();
const configureStore = (rootSaga, rootReducer, initialState = {}) => {
  const middleware = [sagaMiddleware];

  const store = {
    ...createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(...middleware)),
    ),
    runSaga: rootSaga && sagaMiddleware.run(rootSaga),
  };

  if (process.env.NODE_ENV === 'development' && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('./rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return { store };
};

export default configureStore;
