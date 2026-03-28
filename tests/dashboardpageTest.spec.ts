import {test,expect} from"@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { Dashboardpage } from "../pages/dashboardpage"

let url="https://rahulshettyacademy.com/client/"
let username="shubhangi.dudhani@gmail.com"
let password="Shubha123"
let productname="iphone 13 pro"
let login:LoginPage
let dashboardpage:Dashboardpage

test.beforeEach(async({page})=>{
  login=new LoginPage(page)
  dashboardpage=new Dashboardpage(page)
 await login.launchURLl(url)
 await login.loginintoapllication(username,password)
 await expect(login.homepageidentifier).toBeVisible()

})
test("Add the product to the cart",{tag:"@smoke"},async()=>{
await dashboardpage.searchAddproducttocart(productname)
await expect(dashboardpage.AddtocartsucessMsg).toHaveText("Product Added To Cart")
})
test("validate the product on view page",{tag:"@smoke"},async()=>{
await dashboardpage.searchAndviewproductdetails(productname)
await expect(dashboardpage.ViewproductName).toHaveText(productname)
})








