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
    }
};
console.log(typeof []);
console.log(ss);
function name(params) {
    return typeof params === 'string';
}
console.log(name(1));
export const s = y;
export default { x, y };
