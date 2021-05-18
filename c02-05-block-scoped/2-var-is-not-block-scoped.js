


function foo() {

  { var bar }  // var is not block scope

  try {
    console.log('>> 1:', bar, ' bar has been declared')
  } catch (e) {
    console.log('>> 1:', e)
  }

}
foo();

// >> 1: undefined  bar has been declared
