import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from '../sagas'

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [thunk, sagaMiddleware]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

  sagaMiddleware.run(helloSaga)

  return store
}
