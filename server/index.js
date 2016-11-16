import bodyParser from 'body-parser'
const morgan = require('morgan')
const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 3001))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url ' +
  'HTTP/:http-version" :status :res[content-length] :response-time ms'))

// Setup API
app.post('/api/contact', require('./api/contact').default.postContact)
app.get('/api/contacts', require('./api/contacts').default.getContacts)

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(require('path')
      .resolve(__dirname, '..', 'client/build', 'index.html')
    )
  })
}

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`)
})

export default app
