import { combineReducers } from 'redux';

const contactsCreateList = () => {

  const index = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_CONTACTS_SUCCESS':
        return action.response.result;
      case 'ADD_CONTACT_SUCCESS':
        return [...state, action.response.result];
      default:
        return state;
    }
  }

  return combineReducers({
    index
  });
}

export default contactsCreateList;

export const getIds = (state) => state.contacts.byList.index;
