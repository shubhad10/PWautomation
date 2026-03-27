import{test, expect}from '@playwright/test'
 test('fill the input filed and click on the element',async function({page}){
await page.goto ("https://practicetestautomation.com/practice-test-login/")
await page.locator("input#username").fill("student")
await expect (page.locator("input#username")).toHaveValue("student")
await page.locator("input#password").fill("Password123")
await expect (page.locator("input#password")).toHaveValue("Password123")
await page.getByRole('button',{name:'submit'}).click()
await expect(page.locator("h1.post-title")).toHaveText("Logged In Succesfully")
await   expect(page.getByText("Log out",{exact:true})).toBeVisible()
})