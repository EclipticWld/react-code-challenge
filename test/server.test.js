// const exec = require('mz/child_process').exec
// const request = require('supertest-as-promised')
// const expect = require('chai').expect
import http from 'http'
import assert from 'assert'

import '../dist'

// describe('builds application', function () {
//   it('builds to "build" directory', function () {
//     // Disable mocha time-out because this takes a lot of time
//     this.timeout(0)
//
//     // Run process
//     return exec('npm run build')
//   })
// })

describe('express serving', function () {
  process.env.NODE_ENV = 'production'
  it('should return 200', done => {
    http.get('http://localhost:3000/', res => {
      assert.equal(200, res.statusCode)
      done()
    })
  })
  // it('responds to / with the index.html', function () {
  //   process.env.NODE_ENV = 'production'
  //   console.log('request(app)', request(app).get('/'))
  //   return request(app)
  //     .get('/')
  //     // .expect('Content-Type', /html/)
  //     .expect(200)
  //     // .then(res => expect(res.text).to.contain('<div id="root"></div>'))
  // })

  // it('responds to favicon.icon request', function () {
  //   return request(app)
  //     .get('/favicon.ico')
  //     .expect('Content-Type', 'image/x-icon')
  //     .expect(200)
  // })
  //
  // it('responds to any route with the index.html', function () {
  //   return request(app)
  //     .get('/foo/bar')
  //     .expect('Content-Type', /html/)
  //     .expect(200)
  //     .then(res => expect(res.text).to.contain('<div id="root"></div>'))
  // })
})
