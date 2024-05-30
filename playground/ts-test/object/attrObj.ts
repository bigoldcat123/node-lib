import { log } from 'node:console';
import { EventEmitter } from 'node:events';


class Person {
    private name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    setName(name: string) {
        this.name = name;
    }
}

const x = new Person('s', 11)
console.log(Object.keys(x),
Object.values(x),
Object.entries(x));

const person = {
    name: 's',
    age: 11,
    function () {
        console.log('s');
        this.age = 12
    }
}

console.log(Object.keys(person),
Object.values(person),
Object.entries(person));


console.log(Person.prototype,Object.prototype)

const me = Object.create(person)

console.log(Object.getPrototypeOf(Person))

class Man extends Person {
    constructor () {
        super('name', 11)
    }
}
const s = new Man()
console.log(Man.prototype);
//@ts-ignore
console.log(s.__proto__);

const ss:any = {} 
Object.assign(ss,s)
log(ss)
Object.assign(ss,person)
//@ts-ignore
log(ss)

//@ts-ignore
Object.prototype.My = () => {
    log('my func tion')
}

ss.My()