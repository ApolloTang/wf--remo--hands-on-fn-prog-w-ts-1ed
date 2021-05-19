const myCallBack = function() {
  console.log(this) // What is this in an anonymous fn?
}

function bar(cb) {cb()}

bar(myCallBack)  // nodejs:  <ref *1> Object [global]
                 // browser: window

