import puppeteer, { ElementHandle } from "puppeteer";

async function main() {
    const broswer = await puppeteer.launch({ headless: false })
    const page = await broswer.newPage()

    await page.setViewport({ width: 1080, height: 1024 });

    await page.goto('https://www.bilibili.com')

    //屏幕滚动
    await page.evaluate(() => {
        window.scrollTo(0, 1000)
    })
    let res = []
       
    setInterval(async () => {
        // eval函数 是在浏览器端执行的 ！！ 可以在浏览器端执行js然后将结果返回。
        const x = await page.$$eval('.bili-video-card__info--tit', (els) => {
            return els.map(el => el.getAttribute('title'))
        })

        console.log(x);
    }, 1000)
}

main()