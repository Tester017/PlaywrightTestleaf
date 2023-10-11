import {chromium,test} from "@playwright/test"

test("first test",async ()=>{

const browser = await chromium.launch({headless:false})
const bContext = await browser.newContext();
const bPage = await bContext.newPage();

await bPage.goto("https://www.google.com/")
const url = bPage.url
console.log(`${bPage.url()}`)


})