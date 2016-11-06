import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './redux/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

import { App, ContactsKeeper } from './containers';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} name="Home">
        <Route path="contacts-keeper"
          component={ContactsKeeper}
          name="Contacts Keeper"
        />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
