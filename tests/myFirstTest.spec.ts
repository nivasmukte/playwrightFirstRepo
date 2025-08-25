import {test,expect} from "@playwright/test";
test("Verify the title of the page", async ({page}) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    let titlePage:string =await page.title();
    console.log(titlePage);
    await expect(page).toHaveTitle("ParaBank | Welcome | Online Banking");
})