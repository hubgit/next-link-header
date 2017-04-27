## Usage

```js
var nextLink = require('next-link-header')

fetch('https://api.github.com/search/repositories?q=language:javascript')
    .then(response => nextLink(response))
    .then(function (url) {
        // do something with `url`
    })
})
```
