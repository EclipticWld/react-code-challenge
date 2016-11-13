import { Schema, arrayOf } from 'normalizr'

export const contact = new Schema('contacts')
export const arrayOfContacts = arrayOf(contact)
