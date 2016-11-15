import { v4 } from 'node-uuid'
import bodyParser from 'body-parser'
const express = require('express')
const app = express()

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

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

app.set('port', (process.env.PORT || 3001))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/contactTable', (req, res) => {
  delay(500)
    .then(() => { res.json(fakeDatabase.contacts) })
  // res.json(fakeDatabase.contacts)
})

app.post('/api/addContact', (req, res) => {
  const contact = {
    id: v4(),
    firstName: req.body.firstName || '',
    lastName: req.body.lastName || '',
    bithday: req.body.bithday || '',
    phoneNumber: req.body.phoneNumber || '',
    email: req.body.email || '',
    notes: req.body.notes || ''
  }
  fakeDatabase.contacts.push(contact)
  delay(500)
    .then(() => { res.json(contact) })
  // res.json(contact)
})

// Express only serves static assets in production
// if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  const morgan = require('morgan')
  app.use(express.static('client/build'))
  // Setup logger
  app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client/build', 'index.html'))
  })
// }

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`)
})

module.exports = app
