import{test,expect,Locator} from "@playwright/test";
test("Verify dynamic elements", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    for(let i=1;i<=5;i++){
        //xpath
        //let dynamicButton:Locator=page.locator("//button[contains(@name,'st')]");
        //css
        //let dynamicButton:Locator=page.locator("button[name='start'],button[name='stop']");
        //built-in locator
        let dynamicButton:Locator=page.getByRole("button",{name:/START|STOP/});
        await dynamicButton.click();
        await page.waitForTimeout(2000);
    }
})