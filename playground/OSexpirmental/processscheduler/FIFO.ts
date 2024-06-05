export type Process_SCHEDULER = {
    pid: number,
    createTime: number,
    runTime: number,
    isFinished: boolean,
    turnaroundTime?: number,
    weightTurnaroundTime?:number,
    finishTime?:number
}
let PList: Process_SCHEDULER[] = [{
    pid: 0,
    createTime: 0,
    runTime: 2,
    isFinished: false
}, {
    pid: 1,
    createTime: 2,
    runTime: 1,
    isFinished: false
},
{
    pid: 2,
    createTime: 4,
    runTime: 1,
    isFinished: false
},
{
    pid: 3,
    createTime: 5,
    runTime: 2,
    isFinished: false
}
]
let currentTime = 0
let ReadyQueue: Process_SCHEDULER[] = []
const init_FIFO = () => {
    ReadyQueue = PList.sort((a, b) => a.createTime - b.createTime)
}
const f = 0
const f_weight = 0
const pLen = PList.length
const run_FIFO = () => {
    init_FIFO()
    while (ReadyQueue.length > 0) {
        const job = ReadyQueue.shift() as Process_SCHEDULER
        currentTime += job.runTime
        job.isFinished = true
        job.finishTime = currentTime
        job.turnaroundTime = currentTime - job.createTime
        job.weightTurnaroundTime = job.turnaroundTime / job.runTime
        console.log(job);
    }
    console.log('平均周转时间' + f / pLen + '\n平均带权周转时间' + f_weight / pLen);
}
run_FIFO()