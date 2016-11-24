import { combineReducers } from 'redux'

const isSend = (state = false, action) => {
  switch (action.type) {
    case 'POST_CONTACT_SUCCESS':
      return true
    case 'POST_CONTACT_RESET':
    case 'POST_CONTACT':
    case 'POST_CONTACT_FAILURE':
      return false
    default:
      return state
  }
}

const isSending = (state = false, action) => {
  switch (action.type) {
    case 'POST_CONTACT':
      return true
    case 'POST_CONTACT_RESET':
    case 'POST_CONTACT_SUCCESS':
    case 'POST_CONTACT_FAILURE':
      return false
    default:
      return state
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'POST_CONTACT_FAILURE':
      return action.message
    case 'POST_CONTACT_RESET':
    case 'POST_CONTACT_SUCCESS':
    case 'POST_CONTACT':
      return null
    default:
      return state
  }
}

const postContact = combineReducers({
  isSend,
  isSending,
  errorMessage
})

export default postContact

export const getIsContactSend = (state) => state.contacts.postContact.isSend
export const getIsContactSending = (state) => state.contacts.postContact.isSending
export const getContactErrorMessage = (state) => state.contacts.postContact.errorMessage
