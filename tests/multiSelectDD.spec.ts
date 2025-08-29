import {test,expect,Locator} from '@playwright/test';
test("Single select dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //1.Select option from the dd
    //await page.locator("select#colors").selectOption(["Red","Green","Blue"]);//visible text
    //await page.locator("select#colors").selectOption(["red","green","blue"]);//value attribute
    await page.locator("select#colors").selectOption([{label:"Red"},{label:"Yellow"},{label:"White"}]);
    await page.waitForTimeout(3000);
   //2) Check number of options in the dd
   const ddOptions:Locator=page.locator("select#colors>option");
   await expect(ddOptions).toHaveCount(7);
    await page.waitForTimeout(3000);
   //3)Check specific option is present in the dd
   const optionText:string[]=(await ddOptions.allTextContents()).map(text=>text.trim());
   console.log(optionText);
   expect(optionText).toContain("White");
   await page.waitForTimeout(3000);

   //4) Print all the options of dd
   for(const option of optionText){
    console.log(option);
   }

})