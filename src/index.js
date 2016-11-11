import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createStore from './redux/createStore'

import AppContainer from './containers/AppContainer'
import './index.css'

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)
const history = syncHistoryWithStore(browserHistory, store)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

const routes = require('./routes/index').default(store)

ReactDOM.render(
  <AppContainer store={store} history={history} routes={routes} />,
  MOUNT_NODE
)
