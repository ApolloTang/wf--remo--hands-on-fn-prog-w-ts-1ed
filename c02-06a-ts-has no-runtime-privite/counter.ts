class Counter {
    private _i: number;
    public constructor() {
        this._i = 0;
    }
    public get(): number {
        return this._i;
    }
    public set(val: number): void {
        this._i = val;
    }
    public increment(): void {
        this._i++;
    }
}

let counter = new Counter();
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
