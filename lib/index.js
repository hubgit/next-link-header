var parseLinkHeader = require('parse-link-header')

module.exports = function (response) {
  var links = parseLinkHeader(response.headers.get('link'))

  return links.next ? links.next.url : null
}
