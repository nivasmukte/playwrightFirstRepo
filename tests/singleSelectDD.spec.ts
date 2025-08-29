import {test,expect,Locator} from '@playwright/test';
test("Single select dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //1.Select option from the dd
    await page.locator("select#country").selectOption("India");//visible text
    //await page.locator("select#country").selectOption({value:"uk"});// value attribute
   // await page.locator("select#country").selectOption({label:"India"});//label attribute
   // await page.locator("select#country").selectOption({index:5});//index attribute
   await page.waitForTimeout(3000);

   //2) Check number of options in the dd
   const ddOptions:Locator=page.locator("select#country>option");
   await expect(ddOptions).toHaveCount(10);
   await page.waitForTimeout(3000);

   //3)Check specific option is present in the dd
   const optionsText:string[]=(await ddOptions.allTextContents()).map(text=>text.trim());;
   console.log(optionsText);
   expect(optionsText).toContain("Japan");
   await page.waitForTimeout(3000);

   //4) Print all the options of dd
   for(const option of optionsText){
    console.log(option);
   }

})