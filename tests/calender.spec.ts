import { test,expect } from "@playwright/test"
test("file uploads handling ",async({page})=>{
await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
await page.locator(".ui-datepicker-trigger").click()
const targetday="15"
const targetmonth="March"
const targetyear="2026"
const monthpicker= page.locator("ui-datepicker-month")
const yearpicker= page.locator("ui-datepicker-year")
const nextbtn= page.locator("ui-icon ui-icon-circle-triangle-e")
while(true){
    if( (await monthpicker.textContent()===targetmonth )&&(await yearpicker.textContent()===targetyear))
    {

     await page.getByText(targetday,{exact=true})
    }
    else{

        await nextbtn.click()
    }





}










})