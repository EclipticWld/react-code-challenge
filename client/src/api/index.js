import { checkStatus, parseJSON } from '../libs/fetchHelpers'

export const fetchContacts = () =>
  fetch('api/contacts')
    .then(checkStatus)
    .then(parseJSON)

export const addContact = (data) =>
  fetch('api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(checkStatus)
    .then(parseJSON)
