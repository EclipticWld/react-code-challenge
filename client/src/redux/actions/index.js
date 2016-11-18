import { submit, reset } from 'redux-form'
import { normalize } from 'normalizr'
import * as schema from './schema'
import * as api from '../../api'

// const POST = 'POST'
const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes (base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

// function createPostTypes (base) {
//   return [POST, SUCCESS, FAILURE].reduce((acc, type) => {
//     acc[type] = `${base}_${type}`
//     return acc
//   }, {})
// }

// export const CONTACT = createPostTypes('CONTACT')
export const CONTACTS = createRequestTypes('CONTACTS')

// Create action based on type
function action (type, payload = {}) {
  return {type, ...payload}
}

export const contacts = {
  request: () => action(CONTACTS.REQUEST),
  success: (response) => action(
    CONTACTS.SUCCESS,
    {response}
  )
//   failure: (error) => action(CONTACTS.FAILURE, {message: error.message || 'Something went wrong'}
//   )
}

// export const addContact = () => ({
//   type: 'ADD_CONTACT_REQUEST'
// })
//
// export const postedContact = (response) => ({
//   type: 'ADD_CONTACT_SUCCESS',
//   response: normalize(response, schema.contact)
// })
//
// export const invalidateContact = (error) => ({
//   type: 'ADD_CONTACT_FAILURE',
//   message: error.message || 'Something went wrong'
// })

export const fetchContacts = (filter) => (dispatch, getState) => {
  // if (getIsFetching(getState(), filter)) {
    // return Promise.resolve()
  // }
  dispatch({
    type: 'FETCH_CONTACTS_REQUEST'
  })

  return api.fetchContacts(filter).then(
    response => {
      dispatch({
        type: 'FETCH_CONTACTS_SUCCESS',
        response: normalize(response, schema.arrayOfContacts)
      })
    },
    error => {
      dispatch({
        type: 'FETCH_CONTACTS_FAILURE',
        message: error.message || 'Something went wrong'
      })
    }
  )
}

export const submitContact = (values) => (dispatch) => {
  dispatch({
    type: 'ADD_CONTACT_REQUEST'
  })

  return api.addContact(values).then(response => {
    dispatch({
      type: 'ADD_CONTACT_SUCCESS',
      response: normalize(response, schema.contact)
    })
    dispatch(reset('userForm'))
  })
}

export const resetContact = () => (dispatch) => {
  dispatch({
    type: 'ADD_CONTACT_RESET'
  })
}

export const remoteSubmitUserForm = () => (dispatch) => {
  dispatch(submit('userForm'))
}
