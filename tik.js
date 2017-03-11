//
// tik.js
//
// Minimal Observer pattern
//
//
var tikr = {

  events: [],

  on( eventName, action ) {
    this.events[ eventName ] = this.events[ eventName ] || new Set()
    this.events[ eventName ].add( action )
  },

  remove( eventName, action ) {
    if ( this.events[ eventName ] )
      this.events[ eventName ].delete( action )
  },

  tik( eventName, eventOb ) {
    if ( this.events[ eventName ] )
      this.events[ eventName ].forEach( action => action( eventOb ) )
  }
}
