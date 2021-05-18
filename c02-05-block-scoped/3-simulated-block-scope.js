


function foo() {

  (()=>{ // use iife to simulate block scope
    var bar
  })()

  try {
    console.log('>> 1:', bar, ' bar has been declared')
  } catch (e) {
    console.log('>> 1:', e)
  }

}
foo();

// >> 1: ReferenceError: bar is not defined
