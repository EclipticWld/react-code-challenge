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
      bithday: '1992.01.30',
      lastName: 'German',
      phoneNumber: '9423432423',
      email: 'alex.german@gmail.com',
      notes: 'Hey there!'
    }
  ]
}

export default fakeDatabase
