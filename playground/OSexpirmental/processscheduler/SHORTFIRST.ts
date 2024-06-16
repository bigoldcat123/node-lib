import type { Process_SCHEDULER } from './FIFO.ts'
let PList_short: Process_SCHEDULER[] = [{
    pid: 0,
    createTime: 0,
    runTime: 9,
    isFinished: false
}, {
    pid: 1,
    createTime: 2,
    runTime: 10,
    isFinished: false
},
{
    pid: 2,
    createTime: 4,
    runTime: 3,
    isFinished: false
},
{
    pid: 3,
    createTime: 11,
    runTime: 1,
    isFinished: false
}
]
let currentTime_short = 0
let ReadyQueue_short: Process_SCHEDULER[] = []
function checkAvailableProcess() {
    for (let i = 0; i < PList_short.length; i++) {
        if (PList_short[i].createTime <= currentTime_short) {
            ReadyQueue_short.push(PList_short[i])
        }
    }
    PList_short = PList_short.filter(x => {
        return x.createTime > currentTime_short
    })
}
const pickShortest = (): Process_SCHEDULER | undefined => {
    if (ReadyQueue_short.length == 0) {
        return undefined
    }
    ReadyQueue_short = ReadyQueue_short.sort((a, b) => a.runTime - b.runTime)
    const job = ReadyQueue_short.shift() as Process_SCHEDULER
    if (!job) {
        currentTime_short++
    }
    return job
}
let f = 0
let f_weight = 0
const pNum = PList_short.length
const run = () => {
    checkAvailableProcess()
    while (PList_short.length > 0) {
        let job
        while ((job = pickShortest())) {
            currentTime_short += job.runTime
            job.isFinished = true
            job.finishTime = currentTime_short
            job.turnaroundTime = currentTime_short - job.createTime
            job.weightTurnaroundTime = job.turnaroundTime / job.runTime
            f += job.turnaroundTime
            f_weight += job.weightTurnaroundTime
            console.log(job);

            checkAvailableProcess()
        }
    }
    console.log('平均周转时间' + f / pNum + '\n平均带权周转时间' + f_weight / pNum);

}
run()