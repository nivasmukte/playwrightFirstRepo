
//Locators- Identifies the elements in the page
//DOM - Document Object Model - It is a tree structure of the HTML elements in the page 
//API interface provided by browser to interact with the elements in the page
//once the web page is loaded, the browser creates a DOM tree structure of the HTML elements in the page
import{test,expect, Locator} from "@playwright/test";
test("Demo on Playwright locators", async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/");
    //locators - API to identify the elements in the page
    //1.page.getByAltText() - idenetifies image elements by alt text
    //await usage - if statement is throwning promise or not and performs some action
    const logo:Locator= page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();//this method returns a promise
    //2.page.getByText() - identifies elements by text
    //Use this locator to find non interactive elements like headings, paragraphs, etc.
    await expect(page.getByText("Welcome to our store")).toBeVisible();
    //3.page.getByRole() - identifies elements by role (role is not an attribute)
    //Use this locator to find interactive elements like buttons, links, checkboxes, tables etc.
    //Implit role - If the element has same a role and tag name
    //Explicit role - If the element does not have same a role and tag name
    await page.getByRole("link",{name:"Register"}).click();
    await expect(page.getByRole("heading",{name:"Register"})).toBeVisible();

    //4.page.getByLabel() - identifies form elements by label
    //Use this locator to find form elements like input, textarea, select etc.
    await page.getByLabel("First name").fill("Niv");
    await page.getByLabel("Last name").fill("Mk");
    await page.getByLabel("Email").fill("abc@gmail.com");
    //5.page.getByPlaceholder() - identifies form elements by placeholder
    await page.getByPlaceholder("Search store").fill("Apple MacBook Pro");

    //page.getByTitle() - identifies the page by title
    //Use this locator to find elements with title attribute
    //page.getByTestId() - identifies the page by test id
    //Use this locator to find elements with data-testid attribute

})