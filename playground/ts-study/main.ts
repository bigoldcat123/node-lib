
interface Person {
    name: string;
}

interface Person {
    age: number;
}

const x: Person = { name: 'John', age: 30 };
const y: Person = { name: 'John', age: 30 }  as const

function fun(arg:number = 10, arg2:number = 20) {

}
fun()
const key = Symbol('key')
const key2 = Symbol('key')
const ss = {
    [key]:'abc',
    [key2]:'sde',
    [Symbol.iterator]:function*(){
        for (let index = 0; index < 10; index++) {
            yield index
        }
    }
}
console.log(typeof []);

console.log(ss);

function name(params:string|number):params is string {
    return typeof params === 'string'
}
console.log(name(1));
type callAble = {
    value:string
    (name:string):number
}
function ccc(params:callAble):void {
    params('a')
}
const xxxx = (name:string):number => {
    return 1
}
xxxx.value = 'a'
ccc(xxxx)
function X<Type extends {length:number}> (ipt:Type):Type | any {
    if(ipt.length > 20){
        return ipt
    }else{
        return []
    }
}
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
  }

  filter1([1, 2, 3, 4], (item) => item > 2);
  function filter2<Type, Func extends (arg: Type) => boolean>(
    arr: Type[],
    func: Func
  ): Type[] {
    return arr.filter(func);
  }
  filter2([1,1],(item) => {
    return item > 2
  })
export const s = y
export default {x,y}
