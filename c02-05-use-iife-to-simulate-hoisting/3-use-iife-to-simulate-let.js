
function foo() {
  var a = 'a'

  try {
    console.log('>> 1:', bar, ' bar has been declared')
  } catch (e) {
    console.log('>> 1:', e)
  }

  (()=>{

    var bar // bar is available after this line

    try {
      console.log('>> 2:', bar, ' bar has been declared')
    } catch (e) {
      console.log('>> 2:', e)
    }

    console.log('>> 3:', a)

  })()

}
foo();
/*
>> 1: ReferenceError: bar is not defined
...
...
>> 2: undefined  bar has been declared
>> 3: a
*/
