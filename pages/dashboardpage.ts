import {Locator, Page} from "playwright"
export class Dashboardpage{
 page:Page
 products:Locator
 AddtocartsucessMsg:Locator
 ViewproductName:Locator

constructor(page:Page){
 this. page=page
 this. products=this.page.locator("div.card-body")
 this.AddtocartsucessMsg=this.page.locator("#toast-container")
  this.ViewproductName= this.page.locator("div.rtl-text h2")
}

 async searchAddproducttocart(productname:string){
  await this.products.last().waitFor()
  const countofproduct=await this.products.count()
   for(let i=0;i < countofproduct;i++){
    const producttext= await this.products.nth(i).locator("b").textContent()
     if(producttext === productname){
     await this.products.nth(i).locator("button").last().click()
   break
     }
   }
}
async searchAndviewproductdetails(productname:string){
  await this.products.last().waitFor()
  const countofproduct=await this.products.count()
   for(let i=0;i<countofproduct;i++){
    const producttext= await this.products.nth(i).locator("b").textContent()
     if(producttext==productname){
     await this.products.nth(i).locator("button").first().click()
   break
     }
   }
}   
}