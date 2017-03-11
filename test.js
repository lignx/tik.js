//
// basement.js test
//
// for tik events
//


basement.set("testing tik events")


// craete a tik object
var tikr = Object.create( tikr )

// create Sets to count green and blue events
var greenEventsList = new Set()
var blueEventsList = new Set()

// add three green event actions
tikr.on( 'green' , () => greenEventsList.add( 'green 1') )
tikr.on( 'green' , () => greenEventsList.add( 'is green!') )
tikr.on( 'green' , () => greenEventsList.add( 'g3') )

// add four blue event actions
var blueaction3 = () => blueEventsList.add( 'blue 3')
tikr.on( 'blue' , () => blueEventsList.add( 'blue 1') )
tikr.on( 'blue' , () => blueEventsList.add( 'blue 2') )
tikr.on( 'blue' , blueaction3 )
tikr.on( 'blue' , () => blueEventsList.add( 'blue 4') )



// test 1
// events added but not tiked yet

var testBefore = basement.test("Events added", "No events tiked so far")
testBefore.check( 'before green tik', greenEventsList.size == 0, 'no events registered' )
testBefore.check( 'before blue tik', blueEventsList.size == 0, 'no events registered' )



// test 2
// tikgreen event
tikr.tik( 'green' )

var testGreen = basement.test("tik green", "check registered tiks")

testGreen.check( 'green 3 tiks', greenEventsList.size == 3, 'should be 3 green events registered' )
testGreen.check( 'green 1', greenEventsList.has('green 1'), 'should have registered green event 1' )
testGreen.check( 'green 2', greenEventsList.has('is green!'), 'should have registered green event 2' )
testGreen.check( 'green 3', greenEventsList.has('g3'), 'should have registered green event 3' )
testGreen.check( 'zero blue', blueEventsList.size == 0, 'should have registered zero blue events so far' )



// test 3
// tik blue event

// setup
// reset green to zero
greenEventsList.clear()
// tik blue event
tikr.tik( 'blue' )

// test:
var testBlue = basement.test("blue event tik", "reset green count. Check blue tiks")

testBlue.check( 'green zero tiks', greenEventsList.size == 0, 'should have registered 0 green events' )
testBlue.check( 'blue 1', blueEventsList.has('blue 1'), 'should have registered blue event 1' )
testBlue.check( 'blue 2', blueEventsList.has('blue 2'), 'should have registered blue event 2' )
testBlue.check( 'blue 3', blueEventsList.has('blue 3'), 'should have registered blue event 3' )
testBlue.check( 'blue 4', blueEventsList.has('blue 4'), 'should have registered blue event 4' )
testBlue.check( 'total 4 blue', blueEventsList.size == 4, 'should have registered 4 blue events' )



// test 4
// remove 1 blue listener, then tik blue event

// setup
greenEventsList.clear()
blueEventsList.clear()
tikr.remove('blue', blueaction3 )
tikr.tik( 'blue' )

// test:
var testBlue2 = basement.test("blue event tik", "reset all counters. remove 1 blue listener and check blue tiks")

testBlue2.check( 'green zero tiks', greenEventsList.size == 0, 'should have registered 0 green eventsd' )
testBlue2.check( 'blue 1', blueEventsList.has('blue 1'), 'should have registered blue event 1' )
testBlue2.check( 'blue 2', blueEventsList.has('blue 2'), 'should have registered blue event 2' )
testBlue2.check( 'blue 3 removed', !blueEventsList.has('blue 3'), 'should not have registered blue event 3' )
testBlue2.check( 'blue 4', blueEventsList.has('blue 4'), 'should have registered blue event 4' )
testBlue2.check( 'total 4 blue', blueEventsList.size == 3, 'should have registered 3 blue events' )
