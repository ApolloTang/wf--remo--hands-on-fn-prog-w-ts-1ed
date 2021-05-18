var Counter = /** @class */ (function () {
    function Counter() {
        this._i = 0;
    }
    Counter.prototype.get = function () {
        return this._i;
    };
    Counter.prototype.set = function (val) {
        this._i = val;
    };
    Counter.prototype.increment = function () {
        this._i++;
    };
    return Counter;
}());
var counter = new Counter();
console.log(counter.get());
counter.set(2);
console.log(counter.get());
counter.increment();
console.log(counter.get());
// @ts-ignore
console.log(counter._i);
//                  ^^
// [tsserver 2341] [E]
// Property '_i' is private and only accessible
// within class ~ //  'Counter'.
