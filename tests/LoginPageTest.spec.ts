import {test,expect} from"@playwright/test"
import { LoginPage } from "../pages/LoginPage"
//import {LoginPage} from '../node_modules/pages/LoginPage'
let url="https://rahulshettyacademy.com/client/"
let username="shubhangi.dudhani@gmail.com"
let password="Shubha123"
let incorrectpassword="Test"

test("check the login credentials working",{tag:'@regression'},async({page})=>{
//const login=new LoginPage(Page)
const login =new LoginPage(page)
await login.launchURLl(url)
await login.loginintoapllication(username,password)
await expect(login.homepageidentifier).toBeVisible()
})
test("check the login invalidcredentials working",async({page})=>{
const login =new LoginPage(page)
await login.launchURLl(url)
await login.invalidLogin(username,incorrectpassword)
await expect(login.errorMessage).toHaveText("Incorrect email or password")
})
