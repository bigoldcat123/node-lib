import { promises } from "dns"

type Porcess = {
    name: string,
    allocated: number[],
    needed: number[],
    isfinished: boolean
}
const processes: Porcess[] = [{
    name: 'p1',
    allocated: [2, 0, 2],
    needed: [1, 1, 1],
    isfinished: false
},
{
    name: 'p2',
    allocated: [0, 1, 0],
    needed: [0, 1, 1],
    isfinished: false
},
{
    name: 'p3',
    allocated: [1, 1, 1],
    needed: [3, 1, 0],
    isfinished: false
},
{
    name: 'p4',
    allocated: [1, 1, 0],
    needed: [0, 0, 1],
    isfinished: false
}
]
const availableRes: number[] = [1, 0, 2]
function isAllowed(request: number[], needed: number[]): boolean {
    for (let i = 0; i < request.length; i++) {
        if (request[i] > needed[i]) {
            return false
        }
    }
    return true
}
function canSatified(request: number[], availableRes: number[]): boolean {
    for (let i = 0; i < request.length; i++) {
        if (request[i] > availableRes[i]) {
            return false
        }
    }
    return true
}
function work(p: Porcess, req: number[], a: number[]) {
    let isFilished = true
    for (let i = 0; i < req.length; i++) {
        p.needed[i] -= req[i]
        p.allocated[i] += req[i]
        if (p.needed[i] != 0) {
            isFilished = false
        }
    }
    p.isfinished = isFilished
}
function returnRes (allocated:number[],av:number[]) {
    for (let index = 0; index < allocated.length; index++) {
        av[index] += allocated[index]
    }
}
function allIsFinished (p:Porcess[]) {
    for (let index = 0; index < p.length; index++) {
        const element = p[index];
        if(!element.isfinished) {
            return false
        }
    }
    return true
}
function banker(p: Porcess[], a: number[]) {
    while (true) {
        let isSafe = false
        for (let i = 0; i < p.length; i++) {
            if (p[i].isfinished) {
                continue
            } 
            if (isAllowed(p[i].needed, p[i].needed) && canSatified(p[i].needed, a)) {
                work(p[i], p[i].needed, a)
                if (p[i].isfinished) {
                    returnRes(p[i].allocated,a)
                    console.log(`${p[i].name} is finished `);
                }
                isSafe = true
                break
            }
        }
        if(allIsFinished(p)) {
            console.log('safe !');
            break
        }
        if(!isSafe) {
            console.log('not Safe!');
            break
        }
    }
}
banker(processes,availableRes)