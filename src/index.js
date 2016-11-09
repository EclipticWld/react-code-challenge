import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './redux/configureStore';

import { App, ContactsKeeper } from './containers';
import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} name="Home">
        <IndexRedirect to="/contacts-keeper" />
        <Route path="contacts-keeper"
          component={ContactsKeeper}
          name="Contacts Keeper"
        />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
