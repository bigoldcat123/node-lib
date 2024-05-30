
const x: any = {
}

Object.defineProperty(x, 'name', {
    set(value) {
        console.log(value);

        this._name = value
    },
    get() {
        return this._name
    }
})
function xx(name: string | 'name', ...arg: any) {
    console.log(arguments);
    for (const s of arguments) {
        console.log(s);

    }

}
x.name = 'abc'
console.log(x.name);
// in 用来循环Key
for (const k in x) {
    console.log(k);
}
const s: Iterable<string> = ['a', 'b', 'c']
xx('', 2, 3, 4)

// 任何实现了 Iterator 接口的对象都可以用于 for...of   Ie *[Symbol.iterator]()
const y = {
    *[Symbol.iterator]() {
        for (const s of Object.keys(this)) {
            yield s
        }
    },
    name: 's',
    age: 11
}
console.log(y);

// both below do the same thing 
for (const yy of y) {
    console.log(yy);
}
for (const yy in y) {
    console.log(yy);
}

