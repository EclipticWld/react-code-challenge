const exec = require('mz/child_process').exec
const expect = require('chai').expect
const request = require('supertest-as-promised')

import app from '../dist'
process.env.NODE_ENV = 'test'

describe('builds application', () => {
  it('builds to "build" directory', function () {
    // Disable mocha time-out because this takes a lot of time
    this.timeout(0)

    // Run process
    return exec('cd client && npm run build')
  })
})

describe('express serving', () => {
  it('responds to / with the index.html', () =>
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .then(res => expect(res.text).to.contain('<div id="root"></div>'))
    )

  it('responds to favicon.icon request', () =>
    request(app)
      .get('/favicon.ico')
      .expect('Content-Type', 'image/x-icon')
      .expect(200)
    )

  it('responds to any route with the index.html', () =>
    request(app)
      .get('/foo/bar')
      .expect('Content-Type', /html/)
      .expect(200)
      .then(res => expect(res.text).to.contain('<div id="root"></div>'))
    )
})
