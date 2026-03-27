import {Locator, Page} from "playwright"

 export class LoginPage{
    page:Page
    username:Locator
    password:Locator
    loginBtn:Locator
    errorMessage:Locator
    homepageidentifier:Locator


    constructor(page:Page){
        this.page=page
        this.username=this.page.getByPlaceholder("email@example.com")
         this.password=this.page.getByPlaceholder("enter your passsword")
         this.loginBtn=this.page.locator("#login")
         this.errorMessage=this.page.locator("#toast-container")
         this.homepageidentifier=this.page.locator("[routerlink='/dashboard/']")
 }
  async launchURLl(url:string){
     await this.page.goto(url)
  }

 async loginintoapllication(username:string,password:string){
     await this.username.fill(username)
     await this.password.fill(password)
     await this.loginBtn.click()
 }

   async invalidLogin(username:string,incorrectpassword:string){
    await this.username.fill(username)
     await this.password.fill(incorrectpassword)
     await this.loginBtn.click()
 }





}
 