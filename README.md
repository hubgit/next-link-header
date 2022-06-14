## Usage

```js
import nextLink from 'next-link-header'

const response = await fetch('https://api.github.com/search/repositories?q=language:javascript')
const url = nextLink(response)
// do something with `url`
```
