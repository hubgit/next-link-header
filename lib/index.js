import parseLinkHeader from 'parse-link-header'

export default function (response) {
  const links = parseLinkHeader(response.headers.get('link'))

  return links.next ? links.next.url : null
}
