![tik.js](http://xzzulz.github.io/tik.js/img/tik2.svg)

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
Basement tests: [tik tests](http://xzzulz.github.com/tik.js/)

MIT license.
