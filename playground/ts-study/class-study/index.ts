class potinter {
    private _x: number;
    y:number;
    get x() {
        console.log('5');
        
        return this._x
    }
    set x(x:number) {
        this.x = x
    }
    constructor(x:number, y:number) {
        this._x = x
        this.y = y
    }
}
const p = new potinter(1, 2)

console.log(p.x);

console.log(Object.keys(p));

function xoy<Type>(tt:Type):tt is Type {
    return tt instanceof String
}