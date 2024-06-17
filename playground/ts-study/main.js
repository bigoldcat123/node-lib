"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s = void 0;
const x = { name: 'John', age: 30 };
const y = { name: 'John', age: 30 };
function fun(arg = 10, arg2 = 20) {
}
fun();
const key = Symbol('key');
const key2 = Symbol('key');
const ss = {
    [key]: 'abc',
    [key2]: 'sde',
    [Symbol.iterator]: function* () {
        for (let index = 0; index < 10; index++) {
            yield index;
        }
    },
    name: 'string'
};
console.log(typeof []);
console.log(ss['name']);
function name(params) {
    return typeof params === 'string';
}
console.log(name(1));
function ccc(params) {
    params('a');
}
const xxxx = (name, s) => {
    console.log(name);
    s;
    return 1;
};
xxxx.value = 'a';
function X(ipt) {
    if (ipt.length > 20) {
        return ipt;
    }
    else {
        return [];
    }
}
function filter1(arr, func) {
    return arr.filter(func);
}
filter1([1, 2, 3, 4], (item) => item > 2);
function filter2(arr, func) {
    return arr.filter(func);
}
filter2([1, 1], (item) => {
    return item > 2;
});
function func(arg, x) {
}
const ssds = '2';
const xasd = {
    true: '2',
    '1': 'a'
};
console.log(xasd);
func(1, "c");
exports.s = y;
exports.default = { x, y };
