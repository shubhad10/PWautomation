import { test,expect } from "@playwright/test"
test("Handling frames",async({page})=>{
await page.goto("https://demo.automationtesting.in/Frames.html")

//const framepage=await page.frameLocator("#singleframe")
//await framepage.locator("input[type='text']").first().fill("Testing")
//await expect (framepage.locator("input[type='Text']")).toHaveValue("Testing")
//await page.getByText("Home",{exact:true}).click()
//await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

//nested 
await page.getByText("Iframe with in an Iframe").click()
const framepage=await page.frameLocator("#Multiple iframe")
const framepage2=await framepage.frameLocator(".iframe-container iframe")
await framepage2.locator("input[type='text']").fill("nested text")
await expect(framepage2.locator("input[type='text']")).toHaveValue("nested text")
await page.getByText("Home",{exact:true}).click()
await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()


})