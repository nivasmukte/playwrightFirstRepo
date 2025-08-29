import {test,expect,Locator} from '@playwright/test';
test("Verify dropdown contains duplicates", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const ddOptions:Locator=page.locator("select#animals>option");
    const optionsList:string[]=(await ddOptions.allTextContents()).map(text=>text.trim());
    const mySet=new Set<String>();
    const duplicateArr:string[]=[];
    for(const option of optionsList){
        if(mySet.has(option)){
            duplicateArr.push(option);
        }
        else{
            mySet.add(option);
        }
    }
    console.log(duplicateArr);
    if(duplicateArr.length>0){
        console.log("Duplicates are present in the dropdown");  
    }
    else{
        console.log("No duplicates are present in the dropdown");
    }
    expect(duplicateArr.length).toBe(0)

})