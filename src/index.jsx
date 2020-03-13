import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import commonStore from 'stores/CommonStore';
import authStore from 'stores/AuthStore';
import userStore from 'stores/UserStore';

import App from './App';

configure({
  enforceActions: 'observed',
});

const stores = {
  commonStore,
  authStore,
  userStore,
};

// For easier debugging
// eslint-disable-next-line no-underscore-dangle
window._____APP_STATE_____ = stores;

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
