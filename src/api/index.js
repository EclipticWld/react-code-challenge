import { v4 } from 'node-uuid'

const fakeDatabase = {
  contacts: [
    {
      id: v4(),
      firstName: 'Andrew',
      lastName: 'Lagman',
      bithday: '1989.02.23',
      phoneNumber: '9423432423',
      email: 'foobar@gmail.com',
      notes: 'hello world'
    },
    {
      id: v4(),
      firstName: 'Alex',
      lastName: 'German',
      bithday: '1992.01.30',
      phoneNumber: '9423432423',
      email: 'alex.german@gmail.com',
      notes: 'Hey there!'
    }
  ]
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const fetchContacts = (filter) =>
  delay(1000).then(() => {
    return fakeDatabase.contacts
  })

export const addContact = (data) =>
  delay(1000).then(() => {
    const contact = {
      id: v4(),
      ...data
    }
    fakeDatabase.contacts.push(contact)
    return contact
  })
