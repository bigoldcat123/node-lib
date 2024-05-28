/**
 * 1. eval函数中是在 浏览器中执行的
 */
import puppeteer, { ElementHandle } from "puppeteer";

async function main() {
    const broswer = await puppeteer.launch({ headless: false })
    const page = await broswer.newPage()

    await page.setViewport({ width: 1080, height: 1024 });

    await page.goto('https://www.bilibili.com')

    const btn = await page.$('.header-login-entry')
    await btn?.click()

    setTimeout(async () => {
        const ipt = await page.$$('.tab__form input')
        console.log(ipt);
        await ipt[0].type('account')
        await ipt[1].type('password')
    }, 1000);

    
}

main()