import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import rootReducer from './reducers'
import configureStore from './store'
import registerServiceWorker from './registerServiceWorker';

import App from './features/App';

import './index.css';

const { store } = configureStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
