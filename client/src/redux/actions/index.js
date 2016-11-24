import { submit } from 'redux-form'
import { normalize } from 'normalizr'
import * as schema from './schema'

const POST = 'POST'
const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes (base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

function createPostTypes (base) {
  return [POST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = type === POST ? base : `${base}_${type}`
    return acc
  }, {})
}

export const POST_CONTACT = createPostTypes('POST_CONTACT')
export const FETCH_CONTACTS = createRequestTypes('FETCH_CONTACTS')

// Create action based on type
function action (type, payload = {}) {
  return {type, ...payload}
}

export const contacts = {
  request: () => action(FETCH_CONTACTS.REQUEST),
  success: (response) => action(
    FETCH_CONTACTS.SUCCESS,
    {response: normalize(response, schema.arrayOfContacts)}
  ),
  failure: (error) => action(
    FETCH_CONTACTS.FAILURE,
    {message: error.message || 'Something went wrong'}
  )
}

export const contact = {
  post: (data) => action(POST_CONTACT.POST, {data}),
  success: (response) => action(
    POST_CONTACT.SUCCESS,
    {response: normalize(response, schema.contact)}
  ),
  failure: (error) => action(
    POST_CONTACT.FAILURE,
    {message: error.message || 'Something went wrong'}
  )
}

export const resetContact = () => (dispatch) => {
  dispatch({
    type: 'POST_CONTACT_RESET'
  })
}

export const remoteSubmitUserForm = () => (dispatch) => {
  dispatch(submit('userForm'))
}
