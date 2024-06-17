"use strict";
class potinter {
    get x() {
        console.log('5');
        return this._x;
    }
    set x(x) {
        this.x = x;
    }
    constructor(x, y) {
        this._x = x;
        this.y = y;
    }
}
const p = new potinter(1, 2);
console.log(p.x);
console.log(Object.keys(p));
function xoy(tt) {
    return tt instanceof String;
}
