import fetch from 'node-fetch'
import nextLink from '../lib/index.js'

describe('module', function () {
  it('parses the next link header', function (done) {
    fetch('https://api.github.com/search/repositories?q=language%3Ajavascript')
      .then(nextLink)
      .then(function (url) {
        expect(url).toBe('https://api.github.com/search/repositories?q=language%3Ajavascript&page=2')
        done()
      })
      .catch(function (error) {
        done.fail(error)
      })
  })
})
