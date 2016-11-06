import { combineReducers } from 'redux';
import contactsById, * as fromByIds from './contactsById';
import contactsCreateList, * as fromByList from './contactsCreateList';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_CONTACTS_REQUEST':
      return true;
    case 'FETCH_CONTACTS_SUCCESS':
    case 'FETCH_CONTACTS_FAILURE':
      return false;
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_CONTACTS_FAILURE':
      return action.message;
    case 'FETCH_CONTACTS_SUCCESS':
    case 'FETCH_CONTACTS_REQUEST':
      return null;
    default:
      return state;
  }
};

const contacts = combineReducers({
  byId: contactsById,
  byList: contactsCreateList(),
  isFetching,
  errorMessage
});

export default contacts;

export const getContactsList = (state) => {
  const ids = fromByList.getIds(state);
  return ids.map(id => fromByIds.getContact(state.contacts.byId, id));
}
export const getIsFetching = (state) => state.contacts.isFetching;
export const getErrorMessage = (state) => state.contacts.errorMessage;
