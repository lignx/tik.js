![tik.js](https://lignx.github.io/tik.js/img/tik2.svg)

## Note
This is an outdated, experiment project, from my early career.\
Have improved significantly, since then.
(https://xiggfi.web.app)

-----------------------------------------------------------------

# tik.js
v1.0

Minimal implementation of events in javascript

## Usage
Example:

```javascript
// create a qiq object
var tikr = Object.create( tikr )

// register event
var action = () => console.log( 'bing event happened' )
tikr.on( 'bing' , action )

// trigger events
var payload = { x: 1 }// add optional payload
tikr.tik( 'bing', payload ) // -> action is called with payload as parameter

// remove listeners
tikr.remove(  'bing' , action )
```
## tests
Basement tests: [tik tests](https://lignx.github.io/tik.js)

MIT license.
