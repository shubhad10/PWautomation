import {test,expect}from "@playwright/test"
test("handling dd element with select tag",async({page})=>{
//await page.goto("https://practice.expandtesting.com/dropdown")
////const countryDD=page.locator("#country")
//await countryDD.selectOption("AX")
//await countryDD.selectOption({label:"Aland Islands"})
//await countryDD.selectOption({index:1})


await page.goto("https://demoqa.com/select-menu")
await page.locator("div.css-13cymwt-control").last().click()
await page.locator("#react-select-4-option-0").click()
await page.locator ("#react-select-4-option-2").click()
//await page.getByText("Blue",{exact:true}).click()

//await page.locator (".css-19bb58m").nth(2).click()
//await page.getByText("Black",{exact:true}).click()

//multple selct with select tag
//await page.goto("https://demoqa.com/select-menu")
//await page.locator("#cars").selectOption(["Volvo","Opel"])
//await page.waitForTimeout(2000)
//await page.locator("#cars").selectOption([{label:"Saab"},{index:3}])
//await page.waitForTimeout(2000)

//multiple select without select tag
//await page.goto("https://demoqa.com/select-menu")
//await page.locator ("#withOptGroup").click()
//await page.getByText("A root option",{exact :true}).click() 

})