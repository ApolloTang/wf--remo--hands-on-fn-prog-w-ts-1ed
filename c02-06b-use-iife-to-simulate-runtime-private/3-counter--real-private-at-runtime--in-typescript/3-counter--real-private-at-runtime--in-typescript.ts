interface Counter {
  new (): {
    set(a:number): void // set: (a: number) => void <-- alternate syntax
    get(): number
    increment(): void
  }
}

//
// This Class simulate the real private
// during runtime
//
var Counter = (function() {
    let _i:number = 0; // <---- protected in closure

    function _Counter() {
      //  Note that it does not use 'this'!
    }
    _Counter.prototype.get = () => _i
    _Counter.prototype.set = (val: number) => { _i = val }
    _Counter.prototype.increment = () => { _i++ }
    return _Counter as unknown as Counter;
})()


let counter = new Counter()
const count:number = counter.get()
console.log(count) // 0

counter.set(2)
console.log(counter.get()) // 2

counter.increment()
console.log(counter.get()); // 3
// @ts-ignore
console.log(counter._i);    // undefined

/*
$ node counter.js
0
2
3
undefined <--- protected private at runtime.
*/

