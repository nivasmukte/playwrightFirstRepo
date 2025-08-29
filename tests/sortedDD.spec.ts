import {test,expect,Locator} from"@playwright/test";
test("Verify dropdown sorting",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const ddOptions:Locator=page.locator("select#animals>option");
//console.log(await ddOptions.allTextContents());
const originalList:string[]=(await ddOptions.allTextContents()).map(text=>text.trim());
console.log(originalList);
const sortedList:string[]=originalList.sort();
console.log(sortedList);
// const ddOptions:Locator=page.locator("select#colors>option");

// const optionsList:string[]=(await ddOptions.allTextContents()).map(text=>text.trim());
// const originalList:string[]=[...optionsList];
// const sortedList:string[]=[...optionsList].sort();
// console.log(originalList)
// console.log(sortedList);

expect(originalList).toEqual(sortedList);

})