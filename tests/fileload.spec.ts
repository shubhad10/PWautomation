import { test,expect } from "@playwright/test"
import  path from "path"
test("file uploads handling ",async({page})=>{
await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
//const filepath1=path.join(__dirname, "../testdata/My Web Sites")
//console.log(filepath1)
const filepath2=path.join(__dirname, "../testdata/Anatomy test.docx")
await page.locator("#filesToUpload").setInputFiles(filepath2)
await expect( page.locator("#fileList li")).toHaveText("Anatomy test.docx")










})