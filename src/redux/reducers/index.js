import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import contacts from './contacts';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  contacts
})

export default rootReducer;
