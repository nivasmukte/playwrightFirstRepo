//xpath stands for XML Path Language, which is used to navigate through elements and attributes in an XML document.
//xpath locators are used to identify elements in the page using xpath expressions
import {test, expect, Locator} from "@playwright/test";
test("Xpath locators demo", async({page}) =>{
    await page.goto("https://demowebshop.tricentis.com/");
    // 1.Abolute xpath - starts from the root element and goes down to the target element
    const logo:Locator =page.locator("xpath=/html/body/div[4]/div[1]/div[1]/div[1]/a/img");
    await expect(logo).toBeVisible();

    // 2.Relative xpath - starts from the target element and goes up to the root element
    const logo1:Locator =page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(logo1).toBeVisible();
    //contains() - used to match a part of the attribute value

    await page.waitForTimeout(5000);
    const product:Locator=page.locator("//h2/a[contains(@href,'computer')]");
    const productCount:number=await product.count();
    console.log("Product count: "+productCount);
    expect(productCount).toBeGreaterThan(0);
    await page.waitForTimeout(5000);

    console.log("Product text: "+await product.first().textContent());
    console.log("product text: "+await product.last().textContent());
    let prooductTitle:string[]=await product.allTextContents();
    for(let i=0;i<prooductTitle.length;i++){
        console.log("product title: "+prooductTitle[i]);
    }

    const buildProduct:Locator=page.locator("//h2/a[starts-with(@href,'/build')]");
    const buildProductCount:number=await buildProduct.count();
    console.log("Build product count: "+buildProductCount);
    expect(buildProductCount).toBeGreaterThan(0);
    await page.waitForTimeout(5000);
    const lastItem:Locator=page.locator("//div[@class='column follow-us']//li[last()]");
    console.log("Last item text: "+await lastItem.textContent());


})