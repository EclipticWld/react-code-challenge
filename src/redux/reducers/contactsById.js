const contactsById = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.contacts
    };
  }
  return state;
};

export default contactsById;

export const getContact = (state, id) => state[id];
