import { exec } from 'mz/child_process'
import { expect } from 'chai'
import request from 'supertest-as-promised'
import app from '../dist'

describe('builds application', () => {
  it('builds to "build" directory', function () {
    // Disable mocha time-out because this takes a lot of time
    this.timeout(0)

    // Run process
    return exec('cd client && npm run build')
  })
})

describe('express server', () => {
  it('should responds to / with the index.html', () => {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .then(res => expect(res.text).to.contain('<div id="root"></div>'))
  })

  it('should responds to favicon.icon request', () => {
    request(app)
      .get('/favicon.ico')
      .expect('Content-Type', 'image/x-icon')
      .expect(200)
  })

  it('should responds to any route with the index.html', () => {
    request(app)
      .get('/foo/bar')
      .expect('Content-Type', /html/)
      .expect(200)
      .then(res => expect(res.text).to.contain('<div id="root"></div>'))
  })
})
