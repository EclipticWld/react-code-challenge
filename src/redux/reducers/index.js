import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import contacts from './contacts';

const rootReducer = combineReducers({
  routing: routerReducer,
  contacts
})

export default rootReducer;
