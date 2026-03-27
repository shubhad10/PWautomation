import xlsx from "xlsx"
export class Excelutils{
static getExceldata (filepath:string,sheetname:string){
    try{
const workbook= xlsx.readFile(filepath)
const Sheet=workbook.Sheets[sheetname]
const data=xlsx.utils.sheet_to_json(Sheet)
return data
    }

    catch(e){
        console.log(e)
    }

}


}