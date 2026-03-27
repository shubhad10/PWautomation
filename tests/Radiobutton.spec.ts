import playwrightConfig, { test,expect } from "@playwright/test"
//import test from "node:test"

 //test("fill the input and click on the element",async function ({page}){
////await page.goto ("https://testautomationpractice.blogspot.com/")
////await page.locator("#female").check()
//await expect(page.locator("#female")).toBeChecked()
//await page.locator ("#thursday").check()
//await expect(page.locator("#thursday")).toBeChecked()


//})
//To get the text Element
test("Handling text value from an element",async function ({page}){
await page.goto ("https://testautomationpractice.blogspot.com/")
//await expect(page.locator("h3.post-title a")).toHaveText("GUI Elements")
//const text=await page.locator("h3.post-title a").innerText()
//console.log(text);
//for multtiple element matching

const allTexts=await page.locator("h2.title").allInnerTexts()
console.log(allTexts);
})