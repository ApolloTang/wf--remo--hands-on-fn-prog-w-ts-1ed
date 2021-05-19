// The ES5 simulate the real private
// during runtime
//
//
var Counter = (function() {
    var _i = 0; // <---- protected in closure

    function Counter() {
      //  Note that it does not use 'this'!
    }
    Counter.prototype.get = function() {
        return _i;
    };
    Counter.prototype.set = function(val) {
        _i = val;
    };
    Counter.prototype.increment = function() {
        _i++;
    };
    return Counter;
})();


let counter = new Counter();
console.log(counter.get()); // 0

counter.set(2);
console.log(counter.get()); // 2

counter.increment();
console.log(counter.get()); // 3

console.log(counter._i);    // undefined

/*
$ node counter.js
0
2
3
undefined <--- protected private at runtime.
*/

