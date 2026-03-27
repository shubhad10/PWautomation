//import { test,expect } from "@playwright/test"
//test("alter handling" ,async({page})=>{
//await page.goto("https://testautomationpractice.blogspot.com/")
//Alter function
//page.on("dialog",function(dialog){
// console.log(dialog.message())
 //dialog.accept()
////})

//await page.locator("#alertBtn").click()
//
//comfirm function
//await page.locator("#confirmBtn").click()
//await expect (page.locator("#demo")).toHaveText("You pressed OK!")

//promt
//page.on("dialog",function(dialog){
 //console.log(dialog.message())
 //dialog.accept("text")
//})
//await page.locator("#promptBtn").click()
//await expect (page.locator("#demo")).toContainText("Hello")

// MULTIPLE TABS
//test("Multiple tabs or window handling",async({page})=>{
//await page.goto("https://demo.automationtesting.in/Windows.html")
//const page1=page.waitForEvent("popup")
//await page.locator("#Tabbed button").click()
//const newpage=await page1
//About  
//await newpage.locator("a#navbarDropdown").click()
//await newpage.getByText("Ecosystem",{exact:true}).click()//
//Documatation
//await newpage.getByText("Documentation",{exact:true}).click()
//await newpage.getByText("The Selenium Browser Automation Project",{exact:true}).isVisible()

//await expect(newpage.locator(".td-content")).toContainText ("Automation Project")
//Downloads
//await newpage.getByText("Downloads",{exact:true}).click()
//await expect(newpage.locator("h2#bindings")).toContainText("WebDriver Language Bindings")
//await page.getByText("Home",{exact:true}).click()
//await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

//two window open
import { test,expect } from "@playwright/test"
test("Multiple tabs or window handling",async({page})=>{
await page.goto("https://demo.automationtesting.in/Windows.html")
const page1=page.waitForEvent("popup")
await page.locator("a.analystic").nth(1).click() //for open new separate window 
const newpage=await page1
const page2=page.waitForEvent("popup")
await page.locator("button.btn btn-primary").click()
const newpage2=await page2

})