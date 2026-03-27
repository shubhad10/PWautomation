import {test,expect} from"@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { Dashboardpage } from "../pages/dashboardpage"
import {Excelutils}from '../Utils/Excelutils.ts'
import path from 'path'
const fliepath=path.join(__dirname,"../testdata/Exceldatafile.xlsx")
const sheetname="Login"
let datas
try{
    datas=Excelutils.getExceldata(fliepath,sheetname)
}
catch(e){
    }
console.log(datas)
let login:LoginPage
let dashboardpage:Dashboardpage

test.beforeEach(async({page})=>{
  login=new LoginPage(page)
  dashboardpage=new Dashboardpage(page)
})
for(let data of datas){
test(`Add the product to the cart ${data.productname}`,async()=>{
  await login.launchURLl(data.url)
 await login.loginintoapllication(data.username,data.password)
 await expect(login.homepageidentifier).toBeVisible()
 await dashboardpage.searchAddproducttocart(data.productname)
await expect(dashboardpage.AddtocartsucessMsg).toHaveText("Product Added To Cart")
})
}
