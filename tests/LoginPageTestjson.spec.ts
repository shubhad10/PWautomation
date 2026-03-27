import {test,expect} from"@playwright/test"
import { LoginPage } from "../pages/LoginPage"
//import {LoginPage} from '../node_modules/pages/LoginPage'
import logindatajson from "../testdata/login.json"

test("check the login credentials working",async({page})=>{
//const login=new LoginPage(Page)
const login =new LoginPage(page)
await login.launchURLl(logindatajson.url)
await login.loginintoapllication(logindatajson.username,logindatajson.password)
await expect(login.homepageidentifier).toBeVisible()
})
test("check the login invalidcredentials working",async({page})=>{
const login =new LoginPage(page)
await login.launchURLl(logindatajson.url)
await login.invalidLogin(logindatajson.username,logindatajson.incorrectpassword)
await expect(login.errorMessage).toHaveText("Incorrect email or password.")
})