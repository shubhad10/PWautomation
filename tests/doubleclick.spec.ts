import playwrightConfig, { test,expect } from "@playwright/test"
test("double click function opration" ,async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
//await page.getByText("Copy Text",{exact:true}).dblclick()
//await expect(page.locator("#field2")).toHaveValue("Hello World!")
//await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
//await page.getByText("Double-Click Me To See Alert",{exact:true}).dblclick()
//await page.getByText("right click me",{exact:true}).click({button:"right"})
//await expect(page.getByText("Delete",{exact:true})).toBeVisible()
//Hover
////await page.goto("https://www.spicejet.com//")
//await page.getByText("Travel Police",{exact:true}).hover()
//await expect(page.getByText ("Baggage Informaton")).toHaveText("Baggage Informaton")

//scroll down
//test("scoling on the page",async({page})=>{
//await page.goto ("https://testautomationpractice.blogspot.com/")
//await page.getByText("Download Files",{exact:true}).click()
//await expect(page.url()).toContain("download-files")
//await expect(page.locator("button#generateTxt")).toBeVisible()

//Drag and Drop

let sourceElement=page.locator("#draggable")
let targetElement=page.locator("#droppable")
sourceElement.dragTo(targetElement)
await expect(page.getByText("Dropped!")).toBeVisible()



})

