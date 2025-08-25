
import{test,expect,Locator} from "@playwright/test";
test("Text input actions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.locator("input#name");
})