
/*
css - Cascading Style Sheets
2 types of css locators
1.Absolute CSS locators - Use the full path of the element in the DOM tree
2.Relative CSS locators - Use the path of the element relative to its parent or ancestor elements
tag with id - #id
tag with class - .class
tag with attribute - tag[attribute="value"]
tag with multiple attributes - tag[attribute1="value1"][attribute2="value2"]

page.locator() - identifies the elements in the page using CSS selectors
*/
import{test, expect,Locator} from "@playwright/test";
test("Verify the css locators",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    //tag#id - identifies the element by id
    // const searchBox:Locator=page.locator("input#small-searchterms");
    // await expect(searchBox).toBeVisible();
    // await searchBox.fill("Costom T-Shirts");
    // await page.waitForTimeout(2000);

    //tag.class - identifies the element by class
    // await page.locator("input.search-box-text").fill("Costom T-Shirts");
    // await page.waitForTimeout(2000);

    //tag[attribute="value"] - identifies the element by attribute
    // await page.locator("input[name='q']").fill("Costom T-Shirts");
    // await page.waitForTimeout(2000);

    //tag#id[attribute="value"] - identifies the element by id and attribute
    await page.locator("input#small-searchterms[name='q']").fill("Costom T-Shirts");
    await page.waitForTimeout(2000);
})