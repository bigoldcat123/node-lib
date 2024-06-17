
let freeTable: {
    start: number,
    volume: number
}[] = [
        {
            start: 100,
            volume: 32
        },
        {
            start: 150,
            volume: 10
        },
        {
            start: 200,
            volume: 5
        },
        {
            start: 220,
            volume: 218
        },
        {
            start: 530,
            volume: 96
        }
    ]

const jobList = [96,20,200]
function sort_first_fit() {
    freeTable = freeTable.sort((a, b) => a.start - b.start)
}
function sort_best_fit() {
    freeTable = freeTable.sort((a, b) => a.volume - b.volume)
}
function tryToAlloc_first_fit(memoryVolume: number) {
    for (let i = 0; i < freeTable.length; i++) {
        if (freeTable[i].volume >= memoryVolume) {
            freeTable[i].volume -= memoryVolume
            freeTable[i].start += memoryVolume
            
            if (freeTable[i].volume == 0) {
                freeTable.splice(i, 1)
            }
            break
        }
        if (i == freeTable.length - 1) {
            throw new Error('no enough space')
        }
    }

    sort_first_fit()
}
function tryToAlloc_best_fit(memoryVolume: number) {
    for (let i = 0; i < freeTable.length; i++) {
        if (freeTable[i].volume >= memoryVolume) {
            freeTable[i].volume -= memoryVolume
            freeTable[i].start += memoryVolume
            if (freeTable[i].volume == 0) {
                freeTable.splice(i, 1)
            }
            break
        }
        if (i == freeTable.length - 1) {
            throw new Error('no enough space')
        }
    }

    sort_best_fit()
}
const main_first_fit = () => {
    sort_first_fit()
    for (let i = 0; i < jobList.length; i++) {
        try {
            tryToAlloc_first_fit(jobList[i])
        } catch (e) {
            console.log(e)
            break
        }
    }
    console.log(freeTable);
}
// main_first_fit()

const main_best_fit = () => {
    sort_best_fit()
    for (let i = 0; i < jobList.length; i++) {
        try {
            tryToAlloc_best_fit(jobList[i])
        } catch (e) {
            console.log(e)
            break
        }
    }
    console.log(freeTable);
}
main_best_fit()