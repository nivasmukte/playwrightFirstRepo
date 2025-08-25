import {test,expect} from "@playwright/test";
test("Verify the title of the page", async ({page}) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    let urlPage:string =await page.url();
    console.log(urlPage);
    await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/index.htm");
})