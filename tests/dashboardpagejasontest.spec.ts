import {test,expect} from"@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { Dashboardpage } from "../pages/dashboardpage"
import dashboarddatajson from "../testdata/dashboard.json"
let login:LoginPage
let dashboardpage:Dashboardpage

test.beforeEach(async({page})=>{
  login=new LoginPage(page)
  dashboardpage=new Dashboardpage(page)
})
for(let product of dashboarddatajson){
test(`Add the product to the cart ${product.productname}`,async()=>{
  await login.launchURLl(product.url)
 await login.loginintoapllication(product.username,product.password)
 await expect(login.homepageidentifier).toBeVisible()
 await dashboardpage.searchAddproducttocart(product.productname)
await expect(dashboardpage.AddtocartsucessMsg).toHaveText("Product Added To Cart")
})
}

