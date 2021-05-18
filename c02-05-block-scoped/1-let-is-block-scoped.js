

function foo() {

  { let bar }  // let is block scoped

  try {
    console.log('>> 1:', bar, ' bar has been declared')
  } catch (e) {
    console.log('>> 1:', e)
  }

}
foo()

// >> 1: ReferenceError: bar is not defined
