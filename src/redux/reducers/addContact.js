import { combineReducers } from 'redux'

const isSend = (state = false, action) => {
  switch (action.type) {
    case 'ADD_CONTACT_SUCCESS':
      return true
    case 'ADD_CONTACT_RESET':
    case 'ADD_CONTACT_REQUEST':
    case 'ADD_CONTACT_FAILURE':
      return false
    default:
      return state
  }
}

const isSending = (state = false, action) => {
  switch (action.type) {
    case 'ADD_CONTACT_REQUEST':
      return true
    case 'ADD_CONTACT_RESET':
    case 'ADD_CONTACT_SUCCESS':
    case 'ADD_CONTACT_FAILURE':
      return false
    default:
      return state
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'ADD_CONTACT_FAILURE':
      return action.message
    case 'ADD_CONTACT_RESET':
    case 'ADD_CONTACT_SUCCESS':
    case 'ADD_CONTACT_REQUEST':
      return null
    default:
      return state
  }
}

const addContact = combineReducers({
  isSend,
  isSending,
  errorMessage
})

export default addContact

export const getIsContactSend = (state) => state.contacts.addContact.isSend
export const getIsContactSending = (state) => state.contacts.addContact.isSending
export const getContactErrorMessage = (state) => state.contacts.addContact.errorMessage
