import { submit } from 'redux-form'
import { normalize } from 'normalizr'
import * as schema from './schema'
import * as api from '../../api'
import { getIsFetching } from '../reducers/contacts'

export const fetchContacts = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve()
  }
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

export const addContact = (data) => (dispatch) =>
  api.addContact(data).then(response => {
    dispatch({
      type: 'ADD_CONTACT_SUCCESS',
      response: normalize(response, schema.contact)
    })
  })

export const remoteSubmitUserForm = () => (dispatch) => {
  dispatch(submit('userForm'))
}
