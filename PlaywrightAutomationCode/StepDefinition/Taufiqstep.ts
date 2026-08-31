import { Given, setDefaultTimeout, Then } from '@cucumber/cucumber'
import { Browser, chromium, expect, firefox, Page, webkit } from 'playwright/test';
import { TestData1, TestData2, TestData3 } from "../Files/TestData.json"

let browser: Browser, page: Page

let context

let file1 = 'WebElementLevelScreenshot.png'

setDefaultTimeout(60 * 1000) //60 seconds

Given('I launch the browser', async function () {

    browser = await chromium.launch({

        headless: false,

        args: ['--start-maximized']
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage();

});

Given('I launch the browser in firefox', async function () {

    browser = await firefox.launch({

        headless: false,

        args: ['--start-maximized']
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage();

});

Given('I launch the browser in safari', async function () {

    browser = await webkit.launch({

        headless: false,

        args: ['--start-maximized']
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage();

});

Given('I launch the browser in headless browser', async function () {

    browser = await chromium.launch({

        headless: true,

        args: ['--start-maximized']
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage();

});


Then('I am launching the facebook application', async function () {

    await page.goto('https://www.facebook.com/');
});

Then('I close the browser', async function () {

    await page.close()
});

Then('I launch the test automation practice application', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/', { timeout: 10000 });
});

Then('I verify web calendar in dynamic way', async function () {

    await page.locator("//input[@id='datepicker']").scrollIntoViewIfNeeded();

    let datePicker = await page.locator("//input[@id='datepicker']")

    if (await datePicker.isVisible()) {

        console.log("datePicker is displayed on the webpage");

        await page.locator("//input[@id='datepicker']").click();

        let calendarTable = await page.locator(".ui-datepicker-calendar");

        if (await calendarTable.isVisible()) {

            console.log("calendarTable is displayed on the webpage");

            let rows = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr").all();

            console.log(" rows count is :" + rows.length);

            if (rows.length > 0) {

                console.log("calendar have rows");

                for (let i = 1; i <= rows.length; i++) {

                    let columns = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td").all();

                    console.log(" columns count is :" + columns.length);

                    if (columns.length > 0) {

                        console.log("calendar have columns");

                        for (let j = 1; j <= columns.length; j++) {

                            let actualDate = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td[" + j + "]");

                            let actualDate1 = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td[" + j + "]").innerText();

                            let expectedDate = "30";

                            if (actualDate1 == expectedDate) {

                                console.log("date :" + actualDate1
                                    + " is displayed in the calendar row number " + i
                                    + " and column number is: " + j);

                                actualDate.click();
                            }
                        }

                    } else {

                        console.log("calendar doesn't have columns");
                    }
                }

            } else {

                console.log("calendar doesn't have rows");
            }
        }
        else {
            console.log("calendarTable is not displayed on the webpage");
        }
    }
    else {
        console.log("datePicker is not displayed on the webpage");
    }
});

Then('I verify Playwright Locators', async function () {

    console.log("========get by placeholder===========")

    //Await page.getByPlaceholder(‘attribute value of the placeholder’).methods()

    await page.getByPlaceholder('Enter Name').fill('Quality')

    await page.getByPlaceholder('Enter EMail').fill('tset@gmail.com')

    console.log("========get by text===========")

    //Await page.getByText(‘text of the web element’).methods()

    //await page.waitForTimeout(4000) // 4 seconds

    await page.getByText('START').click()

    //await page.waitForTimeout(4000) // 4 seconds

    await page.getByText('STOP').click()

    console.log("========get by Role===========")

    //Await page.getByRole(‘type of the web element’,{name:‘text of the web element’}).methods()

    //await page.waitForTimeout(4000) // 4 seconds

    await page.getByRole('button', { name: 'START' }).click()

    //await page.waitForTimeout(4000) // 4 seconds

    await page.getByRole('button', { name: 'STOP' }).click()

    //await page.waitForTimeout(4000) // 4 seconds

    await page.getByRole('checkbox', { name: 'Sunday' }).click()

    //await page.waitForTimeout(4000) // 4 seconds

    await page.getByRole('checkbox', { name: 'Friday' }).click()

    //await page.waitForTimeout(4000) // 4 seconds

    await page.getByRole('textbox', { name: 'phone' }).type('8908908900')

});

Then('I verify Playwright Locators part2', async function () {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm')

    console.log("========get by alttext===========")

    //Await page.getByalttext(‘attribute value of the alt).methods()

    await page.getByAltText('ParaBank').click()

    console.log("========get by titile===========")

    //await page.waitForTimeout(4000) // 4 seconds

    //Await page.getBytitle(‘attribute value of the title’).methods()

    await page.getByTitle('ParaBank').click()

    console.log("========get by label===========")

    //await page.getbylabel(‘text of the label tag’).methods()

    await page.goto('https://login.salesforce.com/')

    //await page.waitForTimeout(4000) // 4 seconds

    await page.getByLabel('Username').fill('quality')

    console.log("========get by test id===========")

    //Await page.getByTestID(‘attribute value of the data testid’).methods()

    await page.getByTestId('submit-button').click()

})

Then('I verify selenium Locators', async function () {

    console.log("============xpaths==================")

    console.log("============absolute xpath==================")

    //await page.loctaor(‘absolute xpath’).methods()

    //await page.locator('/html/body/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[1]/div/div/div[1]/div[1]/div/div/div/div/div[2]/div[1]/input[1]').fill('hi')

    console.log("============relative xpath==================")

    //await page.loctaor(relative xpath’).methods()

    await page.locator("//input[@placeholder='Enter Name']").fill('roopa')

    await page.locator('//*[@id="email"]').fill('quality@yahoo.com')

    console.log("============css selector xpath==================")

    // "input[placeholder='Enter Name']"

    await page.locator("input[placeholder='Enter Phone']").fill('6789067890')

    // class in css

    // await page.locator('.attribute value of the class').methods()

    await page.locator('.wikipedia-search-input').fill('testing')

    // id in css

    // await page.locator('#attribute value of the class').methods()

    await page.locator('#textarea').fill('hyderabad')
})

Then('I Verify selenium xpath methods', async function () {

    console.log("=============contains=======")

    await page.locator("//input[contains(@id,'name')]").fill('Wednesday')

    await page.locator("//*[contains(@placeholder,'EMail')]").fill('quality@yahoo.com')

    console.log("=============starts-with=======")

    await page.locator("//*[starts-with(@placeholder,'Enter')]").last().fill('9090909090')

    await page.locator("//textarea[starts-with(@id,'text')]").fill('bangalore')

    console.log("=============text=======")

    var text = await page.locator("//h2[text()='Alerts & Popups']").innerText()

    console.log("1st way text is :", text) //Alerts & Popups

    text = await page.locator("//*[text()='Alerts & Popups']").innerText()

    console.log("2nd way text is :", text) //Alerts & Popups

    text = await page.locator("//*[contains(text(),'Alerts & Popups')]").innerHTML()

    console.log("3rd way text is :", text) //Alerts &amp; Popups

    text = await page.locator("//*[starts-with(text(),'Alerts & Popups')]").innerHTML()

    console.log("4th way text is :", text) //Alerts &amp; Popups

    /*1st way text is : Alerts & Popups
2nd way text is : Alerts & Popups
3rd way text is : Alerts &amp; Popups
4th way text is : Alerts &amp; Popups*/

    console.log('==============and ================')

    await page.locator('//*[@type="text" and @id="field2"]').fill('and method')

    //await page.waitForTimeout(4000)

    await page.locator('//*[@type="text" and contains(@class,"wikipedia-search-input")]').fill('playwright')

    console.log("======================or====================")

    var orcount = await page.locator('//*[@type="text" or contains(@class,"wikipedia-search-input")]').all()

    console.log("orcount is :", orcount.length) //13
})


Then('I Verify selenium xpath Axes', async function () {

    console.log("=============parent=======")

    var parentcount = await page.locator('//*[@id="female"]//parent::div').all()

    console.log("parentcount is :", parentcount.length) //1

    console.log("=============ancestor=======")

    var ancestorcount = await page.locator('//*[@id="female"]//ancestor::div').all()

    console.log("ancestorcount is :", ancestorcount.length) //21

    console.log("=============preceding=======")

    var precedingcount = await page.locator('//*[@id="sunday"]//preceding::div').all()

    console.log("precedingcount is :", precedingcount.length) //99

    precedingcount = await page.locator('//*[@id="sunday"]//preceding::input').all()

    console.log("precedingcount is :", precedingcount.length) //5

    precedingcount = await page.locator('//*[@id="sunday"]//preceding::label').all()

    console.log("precedingcount is :", precedingcount.length) //8

    console.log("=============child=======")

    var childcount = await page.locator('//div[@class="form-group"]//child::input[@type="text"]').all()

    console.log("childcount is :", childcount.length) //3

    await page.locator('//div[@class="form-group"]//child::input[@type="text"]').first().fill('roopa')

    await page.locator('//div[@class="form-group"]//child::input[@type="text"]').last().fill('6789009876')

    await page.locator('//div[@class="form-group"]//child::input[@type="text"]').nth(1).fill('testing@gmail.com')

    console.log("=============descendant=======")

    var descendantcount = await page.locator('//div[@class="form-group"]//descendant::input[@type="checkbox"]').all()

    console.log("descendantcount is :", descendantcount.length) //7

    await page.locator('//div[@class="form-group"]//descendant::input[@type="checkbox"]').first().click() // sunday

    await page.locator('//div[@class="form-group"]//descendant::input[@type="checkbox"]').last().click() // saturday

    await page.locator('//div[@class="form-group"]//descendant::input[@type="checkbox"]').nth(2).click() // tuesday

    await page.locator('//div[@class="form-group"]//descendant::input[@type="checkbox"]').nth(5).click() // friday

    console.log("=============following=======")

    var followingcount = await page.locator('//div[@class="form-group"]//following::input[@type="checkbox"]').all()

    console.log("followingcount is :", followingcount.length) //12

    console.log("=============following sibling=======")

    var followingSiblingcount = await page.locator('//input[@id="field1"]//following-sibling::input').all()

    console.log("followingSiblingcount is :", followingSiblingcount.length) //1

    followingSiblingcount = await page.locator('//input[@id="field1"]//following-sibling::br').all()

    console.log("followingSiblingcount is :", followingSiblingcount.length) //3

    await page.locator('//input[@id="field1"]//following-sibling::input').scrollIntoViewIfNeeded()

    await page.locator('//input[@id="field1"]//following-sibling::input').fill('hi everyone good morning')
})

Then('I verify playwright methods', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/', { timeout: 10000 });

    console.log("==========to refresh the page==========")

    await page.reload()

    console.log("==========to scroll to the web element==========")

    await page.getByText('New Tab').scrollIntoViewIfNeeded()

    console.log("==========to click to the web element==========")

    //And I close the browser

    await page.getByText('New Tab').click()

    //And I close the browser

    console.log("==========to go to the previous page==========")

    await page.bringToFront()

    console.log("========to enter text to the textbox===========")

    await page.getByPlaceholder('Enter Name').fill('Quality')

    await page.getByPlaceholder('Enter EMail').type('tset@gmail.com')

    console.log("=============to get more than one web element count=======")

    var followingcount = await page.locator('//div[@class="form-group"]//following::input[@type="checkbox"]').all()

    console.log("followingcount is :", followingcount.length) //12

    console.log("========to title of the web page===========")

    console.log(await page.title()) //Automation Testing Practice

    console.log("========to url of the web page===========")

    console.log(await page.url()) //https://testautomationpractice.blogspot.com/

    console.log("========to clear the text of a web element===========")

    await page.locator('//input[@id="field1"]').scrollIntoViewIfNeeded()

    //await page.waitForTimeout(2000)

    await page.locator('//input[@id="field1"]').clear()

    //await page.waitForTimeout(2000)

    await page.locator('//input[@id="field1"]').fill('quality')

    console.log("=============to get the text of  a web element=======")

    var text = await page.locator("//h2[text()='Alerts & Popups']").innerText()

    console.log("1st way text is :", text) //Alerts & Popups

    text = await page.locator("//*[text()='Alerts & Popups']").innerText()

    console.log("2nd way text is :", text) //Alerts & Popups

    text = await page.locator("//*[contains(text(),'Alerts & Popups')]").innerHTML()

    console.log("3rd way text is :", text) //Alerts &amp; Popups

    text = await page.locator("//*[starts-with(text(),'Alerts & Popups')]").innerHTML()

    console.log("4th way text is :", text) //Alerts &amp; Popups

    /*1st way text is : Alerts & Popups
2nd way text is : Alerts & Popups
3rd way text is : Alerts &amp; Popups
4th way text is : Alerts &amp; Popups*/

    console.log("=============to right click of  a web element=======")

    await page.locator('.wikipedia-search-input').scrollIntoViewIfNeeded()

    await page.locator('.wikipedia-search-input').click({ button: 'right' })

    console.log("=============to get the text from more than one web element=======")

    console.log("=============1st way=======")

    var textOfAllWebElements = await page.locator("//*[@class='title']").allInnerTexts()

    console.log("1st way text is :", textOfAllWebElements.length) //17

    for (let i = 0; i < textOfAllWebElements.length; i++) {

        console.log(textOfAllWebElements[i])
    }

    /*Automation Testing Practice
Upload Files
Static Web Table
Dynamic Web Table
Pagination Web Table
Tabs
Dynamic Button
Alerts & Popups
Mouse Hover
Double Click
Drag and Drop
Slider
SVG Elements
Scrolling DropDown
Labels And Links
Form
ShadowDOM*/

    console.log("=============2nd way=======")

    var textOfAllWebElements = await page.locator("//*[@class='title']").allTextContents()

    console.log("1st way text is :", textOfAllWebElements.length) //17

    for (let i = 0; i < textOfAllWebElements.length; i++) {

        console.log(textOfAllWebElements[i])
    }

    /*Automation Testing Practice
Upload Files
Static Web Table
Dynamic Web Table
Pagination Web Table
Tabs
Dynamic Button
Alerts & Popups
Mouse Hover
Double Click
Drag and Drop
Slider
SVG Elements
Scrolling DropDown
Labels And Links
Form
ShadowDOM*/

    console.log("=============drag and drop======")

    let first = await page.locator('#draggable')

    let second = await page.locator('#droppable')

    await first.dragTo(second)

    console.log('==============and in selenium xpath================')

    //await page.waitForTimeout(4000)

    await page.locator('//*[@type="text" and @id="field2"]').fill('and method')

    //await page.waitForTimeout(4000)

    await page.locator('//*[@type="text" and contains(@class,"wikipedia-search-input")]').fill('playwright')

    console.log('==============and in playwright================')

    //await page.waitForTimeout(2000)

    await page.locator('#phone').and(page.getByRole('textbox', { name: 'phone' })).fill('987659876')

    //await page.waitForTimeout(2000)

    await page.locator('#textarea').and(page.locator('//*[@id="textarea"]')).fill('Quality thought')

    //await page.waitForTimeout(2000)

    console.log('==============double click of a web element================')

    await page.getByText('START').scrollIntoViewIfNeeded()

    //await page.waitForTimeout(2000)

    await page.getByText('START').dblclick()

})

Then('I verify playwright methods part2', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/', { timeout: 10000 });

    console.log("==========visible==========")

    var visible = await page.locator('#female').isVisible()

    if (visible == true) {

        await page.locator('#female').click()
    }

    console.log("==========hidden==========")

    var hidden = await page.locator('#sunday').isHidden()

    if (hidden == false) {

        await page.locator('#sunday').click()
    }

    console.log("==========disabled==========")

    var disabled = await page.locator('#monday').isDisabled()

    if (disabled == false) {

        await page.locator('#monday').click()
    }

    console.log("==========enabled==========")

    var enabled = await page.locator('#tuesday').isEnabled()

    if (visible == true) {

        await page.locator('#tuesday').click()
    }

    console.log("==========editable==========")

    var editable = await page.locator('#textarea').isEditable()

    if (editable == true) {

        await page.locator('#textarea').fill("nasreen")
    }

    console.log("==========checked==========")

    var checked = await page.locator('#saturday').isChecked()

    if (checked == false) {

        //1st way

        // await page.locator('#saturday').click()

        //2nd way

        await page.locator('#saturday').setChecked(true)
    }

    checked = await page.locator('#saturday').isChecked()

    if (checked == true) {

        //And I close the browser

        //1st way

        //await page.locator('#saturday').click()

        //2nd way

        //await page.locator('#saturday').setChecked(false)

        //3rd way

        await page.locator('#saturday').uncheck()
    }
})

Then('I verify playwright methods part3', async function () {

    await page.goto('https://www.myntra.com/', { timeout: 10000 });

    console.log("==========hover==========")

    await page.locator("//*[text()='Kids']").first().hover()

    console.log("==========hightlight==========")

    await page.getByPlaceholder("Search for products, brands and more").highlight()

    await page.getByPlaceholder("Search for products, brands and more").fill('Home needs')

    console.log("==========get attribute==========")

    var attributeValue = await page.getByPlaceholder("Search for products, brands and more").getAttribute('placeholder')

    console.log('attributeValue of placeholder is :', attributeValue) //Search for products, brands and more

    attributeValue = await page.getByPlaceholder("Search for products, brands and more").getAttribute('class')

    console.log('attributeValue of class is :', attributeValue) //desktop-searchBar

    attributeValue = await page.getByPlaceholder("Search for products, brands and more").getAttribute('data-reactid')

    console.log('attributeValue of data-reactid is :', attributeValue) //1039

})

Then('I verify playwright methods part4', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/', { timeout: 10000 });

    console.log("==========1st way to clear the text in the textbox==========")

    await page.locator('//input[@id="field1"]').scrollIntoViewIfNeeded()

    await page.locator('//input[@id="field1"]').clear()

    await page.locator('//input[@id="field1"]').type('Venu')

    console.log("==========2nd way to clear the text in the textbox==========")

    await page.locator('//input[@id="field1"]').fill("")

    await page.locator('//input[@id="field1"]').fill('Harija')

    console.log("==========3rd way to clear the text in the textbox==========")

    await page.locator('//input[@id="field1"]').press('Control+A')

    await page.keyboard.press('Delete')

    await page.keyboard.up('Control')

    await page.keyboard.insertText('Quality')

    console.log("==========4th way to enter the text in the textbox==========")

    await page.locator('//input[@id="field1"]').clear()

    await page.locator('//input[@id="field1"]').pressSequentially('good morning')

    await page.locator('//input[@id="field1"]').pressSequentially(' everyone')

    console.log("==========dropdown==========")

    let colorsDropdown = await page.locator('#colors')

    await colorsDropdown.scrollIntoViewIfNeeded()

    await colorsDropdown.selectOption('Red')

    await colorsDropdown.selectOption('Green')

    await colorsDropdown.selectOption('Yellow')

    await colorsDropdown.selectOption(['Red', 'Blue', "Green"])

    await colorsDropdown.selectOption({ index: 3 })

    await colorsDropdown.selectOption([{ index: 3 }, { index: 0 }, { index: 1 }])

    let countryDropdown = await page.locator('#country')

    await countryDropdown.scrollIntoViewIfNeeded()

    await countryDropdown.selectOption('India')

    console.log("==========screenshots==========")

    console.log("==========1st way to take the web element level screenshot==========")

    await page.getByPlaceholder('Enter Name').fill('Quality thought')

    await page.getByPlaceholder('Enter Name').screenshot({ path: 'WebElementLevelScreenshot.png' })

    console.log("==========2nd way to take the upto screen length level screenshot==========")

    await page.screenshot({ path: './PlaywrightAutomationCode/Screenshots/UptoScreenLength.jpg' })

    console.log("==========3rd way to take the full page screenshot==========")

    await page.screenshot({ path: './PlaywrightAutomationCode/Screenshots/FullPage.jpg', fullPage: true })

    console.log("==========upload a file==========")

    console.log("==========single file upload==========")

    await page.locator('#singleFileInput').scrollIntoViewIfNeeded()

    await page.locator('#singleFileInput').setInputFiles('WebElementLevelScreenshot.png')

    await page.locator("//*[text()='Upload Single File']").click()

    console.log("==========Multiple file upload==========")

    await page.locator('#multipleFilesInput').setInputFiles([file1, './PlaywrightAutomationCode/Screenshots/FullPage.jpg',

        "C:\\Users\\Punna\\OneDrive\\Desktop\\Automation_Playwright\\2026\\Quality Thought\\7am batch\\Typescript_Javascript\\Playwright\\6th Class_Playwright methods_Dates_ShadowDom_CrossBrowserTesting_Part2\\6th Class.docx"
    ])

    await page.locator("//*[text()='Upload Multiple Files']").click()

})

Then('Generate dates', async function () {

    const todaysDate = new Date()

    console.log('todaysDate is:', todaysDate) //Sat Aug 22 2026 07:34:48 GMT+0530 (India Standard Time)

    const todaysDateInIst = todaysDate.toLocaleDateString()

    console.log('todaysDateInIst is:', todaysDateInIst) //22/8/2026

    let pastDate = new Date(todaysDate)

    pastDate.setDate(pastDate.getDate() - 10)

    const pastDateInIst = pastDate.toLocaleDateString()

    console.log('pastDateInIst is:', pastDateInIst) //12/8/2026

    let futureDate = new Date(todaysDate)

    futureDate.setDate(futureDate.getDate() + 46)

    const futureDateInIst = futureDate.toLocaleDateString()

    console.log('futureDateInIst is:', futureDateInIst) //7/10/2026

    const completeMonth = todaysDate.toLocaleDateString('en-us', { month: 'long' })

    console.log('completeMonth is:', completeMonth) //August

    const shorMonth = todaysDate.toLocaleDateString('en-us', { month: 'short' })

    console.log('shorMonth is:', shorMonth) //Aug

    const year = todaysDate.getFullYear()

    const month = todaysDate.getMonth() + 1

    const date = todaysDate.getDate()

    const nas = year + '-' + month + '-' + date

    console.log(year, '-', month, '-', date) //2026-8-22

    console.log(month, '/', year, '/', date) // 8 /2026/22

    console.log(month, '/', date, '/', year) // 8/22/2026

})

Then('I verify shadow DOM', async function () {

    await page.goto('https://selectorshub.com/xpath-practice-page/')

    //handling shadow dom means parent shadow dom

    await page.locator('#userName').locator('#kils').scrollIntoViewIfNeeded()

    await page.locator('#userName').locator('#kils').fill('Quality')

    //handling child shadow dom means parent shadow dom contains another shadow dom

    await page.locator('#userName').locator('#app2').getByPlaceholder('Enter pizza name').fill('good morning')
})

Then('I verify web table in static way', async function () {

    let webTable = await page.locator('//*[@name="BookTable"]').isVisible()

    if (webTable == true) {

        console.log(" web table is displayed in the web page ") //web table is displayed in the web page

        let expectedText = "Animesh"

        let actualText = await page.locator("//*[@name='BookTable']/tbody/tr[4]/td[2]").innerText()

        if (actualText == expectedText) {

            console.log(expectedText, " is displayed in the web table") //Animesh is displayed in the web table
        }
        else {

            console.log(expectedText, " is not displayed in the web table")
        }
    }
    else {

        console.log(" web table is not displayed in the web page ")
    }
})

Then('I verify web table in static way2', async function () {

    let webTable = await page.locator('//*[@name="BookTable"]').isVisible()

    if (webTable == true) {

        console.log(" web table is displayed in the web page ") //web table is displayed in the web page

        let expectedText = "Amod"

        let actualText = await page.locator("//*[@name='BookTable']/tbody/tr[4]/td[2]").innerText()

        if (actualText == expectedText) {

            console.log(expectedText, " is displayed in the web table")
        }
        else {

            console.log(expectedText, " is not displayed in the web table") //Amod is not displayed in the web table
        }
    }
    else {

        console.log(" web table is not displayed in the web page ")
    }
})

Then('I verify web table in dynamic way', async function () {

    let webTable = await page.locator('//*[@name="BookTable"]').isVisible()

    if (webTable == true) {

        console.log(" web table is displayed in the web page ") //web table is displayed in the web page

        await page.locator('//*[@name="BookTable"]').scrollIntoViewIfNeeded()

        let rows = await page.locator("//*[@name='BookTable']/tbody/tr").all()

        if (rows.length > 0) {

            console.log("  web table have rows ")

            for (let i = 2; i <= rows.length; i++) {

                let columns = await page.locator("//*[@name='BookTable']/tbody/tr[" + i + "]/td").all()

                if (columns.length > 0) {

                    for (let j = 1; j <= columns.length; j++) {

                        // let expectedText = "Amod"

                        // let actualText = await page.locator("//*[@name='BookTable']/tbody/tr[" + i + "]/td[" + j + "]").innerText()

                        // if (actualText == expectedText) {

                        //     //Amod  code

                        //     //console.log(expectedText, " is displayed in the web table in row no :", i, " and column number is :", j)

                        //     //amod, " is displayed in the web table in row no :", 6, " and column number is :", 2
                        // }

                        let expectedText = "Java"

                        let actualText = await page.locator("//*[@name='BookTable']/tbody/tr[" + i + "]/td[" + j + "]").innerText()

                        if (actualText.includes(expectedText)) {

                            console.log(expectedText, " is displayed in the web table in row no :", i, " and column number is :", j)

                            //java, " is displayed in the web table in row no :", 3, " and column number is :", 1

                            //java, " is displayed in the web table in row no :", 3, " and column number is :", 3

                            //java, " is displayed in the web table in row no :", 4, " and column number is :", 3

                            //java, " is displayed in the web table in row no :", 6, " and column number is :", 1

                            //Java  is displayed in the web table in row no : 7  and column number is : 3
                        }
                    }
                }
                else {

                    console.log(" web table dosesn't have columns")
                }
            }
        }
        else {

            console.log("  web table doesn't have rows ")
        }
    }
    else {

        console.log(" web table is not displayed in the web page ")
    }
})

Then('I verify web table headers in dynamic way', async function () {

    let webTable = await page.locator('//*[@name="BookTable"]').isVisible()

    if (webTable == true) {

        console.log(" web table is displayed in the web page ") //web table is displayed in the web page

        await page.locator('//*[@name="BookTable"]').scrollIntoViewIfNeeded()

        let rows = await page.locator("//*[@name='BookTable']/tbody/tr").all()

        if (rows.length > 0) {

            console.log("  web table have rows ")

            for (let i = 1; i <= rows.length; i++) {

                if (i == 1) {

                    let columns = await page.locator("//*[@name='BookTable']/tbody/tr[" + i + "]/th").all()

                    if (columns.length > 0) {

                        for (let j = 1; j <= columns.length; j++) {

                            let headerText = await page.locator("//*[@name='BookTable']/tbody/tr[" + i + "]/th[" + j + "]").innerText()

                            console.log("headerText is: ", headerText)

                            /*BookName
                            Author
                            Subject
                            Price
                            */
                        }
                    }
                }
            }
        }
        else {

            console.log("  web table doesn't have rows ")
        }
    }
    else {

        console.log(" web table is not displayed in the web page ")
    }
})

/*class work handle Dynamic Web Table*/

Then('I verify web calendar in static way', async function () {

    await page.locator('#datepicker').scrollIntoViewIfNeeded()

    await page.locator('#datepicker').click()

    let webCalendar = await page.locator('.ui-datepicker-calendar').isVisible()

    if (webCalendar == true) {

        console.log(" web Calendar is displayed in the web page ") //web Calendar is displayed in the web page

        let expectedDate = "31"

        let actualDate = await page.locator('//*[@class="ui-datepicker-calendar"]/tbody/tr[6]/td[2]').innerText()

        if (actualDate == expectedDate) {

            console.log(expectedDate, " is displayed in the web calendar") //31 is displayed in the web calendar

            await page.locator('//*[@class="ui-datepicker-calendar"]/tbody/tr[6]/td[2]').click()
        }
        else {

            console.log(expectedDate, " is not displayed in the web table")
        }
    }
    else {

        console.log(" web Calendar is not displayed in the web page ")
    }
})

Then('I verify web calendar in static way2', async function () {

    await page.locator('#datepicker').scrollIntoViewIfNeeded()

    await page.locator('#datepicker').click()

    let webCalendar = await page.locator('.ui-datepicker-calendar').isVisible()

    if (webCalendar == true) {

        console.log(" web Calendar is displayed in the web page ") //web Calendar is displayed in the web page

        let expectedDate = "25"

        let actualDate = await page.locator('//*[@class="ui-datepicker-calendar"]/tbody/tr[6]/td[2]').innerText()

        if (actualDate == expectedDate) {

            console.log(expectedDate, " is displayed in the web calendar")

            await page.locator('//*[@class="ui-datepicker-calendar"]/tbody/tr[6]/td[2]').click()
        }
        else {

            console.log(expectedDate, " is not displayed in the web table") //25 is displayed not in the web calendar
        }
    }
    else {

        console.log(" web Calendar is not displayed in the web page ")
    }
})

Then('I verify playwright hard assertions', async function () {

    await page.goto('https://www.amazon.in/')

    //await expect(page.locator/playwrightlocator).methods()

    await expect(page.getByPlaceholder('Search Amazon.in')).toBeTruthy()

    await page.getByPlaceholder('Search Amazon.in').fill('mobiles')

    await expect(page.locator('#nav-search-submit-button')).toBeVisible()

    await page.locator('#nav-search-submit-button').click()

    // await expect(page.locator("//*[text()='Sell']")).toBeHidden()

    /* Expected: hidden
         Received: enabled*/

    //await expect(page.locator("//*[text()='Sell']")).toBeDisabled()

    /* Expected: disabled
           Received: enabled*/

    await expect(page.locator("//*[text()='Sell']")).toBeAttached()

    await expect(page.locator("//*[text()='Sell']")).toHaveCount(1)

    await page.locator("//*[text()='Sell']").click()

    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect(page.locator("//*[@class='title']")).toHaveCount(17)

    var textOfAllWebElements = await page.locator("//*[@class='title']").allInnerTexts()

    for (let i = 0; i < textOfAllWebElements.length; i++) {

        console.log(textOfAllWebElements[i])
    }

    await expect(page.locator("//*[@class='title']")).toContainText(['Dynamic Button'])

    await expect(page.locator("//*[@class='title']")).toContainText(['Upload Files'])

    await expect(page.locator("//*[@class='title']")).toHaveText(['Upload Files'])

    await expect(page.locator("//*[@class='title']")).toContainText(['Upload Files', 'Static Web Table'])

    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('class')

    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('id')

    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('placeholder')

    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('placeholder', 'Enter Name')

    await expect(page.getByPlaceholder('Enter Name')).toHaveId('name')

    await expect(page.getByPlaceholder('Enter Name')).toHaveClass('form-control')

    await expect(page.getByPlaceholder('Enter Name')).toBeEmpty()

    await expect(page.getByPlaceholder('Enter Name')).toBeVisible()

    await page.getByPlaceholder('Enter Name').fill('Quality')

    console.log("hi team good morning")
})

Then('I verify playwright soft assertions', async function () {

    await page.goto('https://www.amazon.in/')

    //await expect.soft(page.locator/playwrightlocator).methods()

    await expect.soft(page.getByPlaceholder('Search Amazon.in')).toBeTruthy()

    await page.getByPlaceholder('Search Amazon.in').fill('mobiles')

    await expect.soft(page.locator('#nav-search-submit-button')).toBeVisible()

    await page.locator('#nav-search-submit-button').click()

    // it will throw the error

    //await expect.soft(page.locator("//*[text()='Sell']")).toBeHidden()

    // it will not throw the error

    // expect.soft(await page.locator("//*[text()='Sell']")).toBeHidden()

    /* Expected: hidden
         Received: enabled*/

    //await expect(page.locator("//*[text()='Sell']")).toBeDisabled()

    /* Expected: disabled
           Received: enabled*/

    await expect.soft(page.locator("//*[text()='Sell']")).toBeAttached()

    await expect.soft(page.locator("//*[text()='Sell']")).toHaveCount(1)

    await page.locator("//*[text()='Sell']").click()

    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect.soft(page.locator("//*[@class='title']")).toHaveCount(17)

    var textOfAllWebElements = await page.locator("//*[@class='title']").allInnerTexts()

    for (let i = 0; i < textOfAllWebElements.length; i++) {

        console.log(textOfAllWebElements[i])
    }

    await expect.soft(page.locator("//*[@class='title']")).toContainText(['Dynamic Button'])

    await expect.soft(page.locator("//*[@class='title']")).toContainText(['Upload Files'])

    await expect.soft(page.locator("//*[@class='title']")).toContainText(['Upload Files', 'Static Web Table'])

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('class')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('id')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('placeholder')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('placeholder', 'Enter Name')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveId('name')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveClass('form-control')

    await expect.soft(page.getByPlaceholder('Enter Name')).toBeEmpty()

    await expect.soft(page.getByPlaceholder('Enter Name')).toBeVisible()

    await page.getByPlaceholder('Enter Name').fill('Quality')

    console.log("hi team good morning")
})

Then('I verify testadata1 from the Json File', async function () {

    await page.getByPlaceholder('Enter Name').fill(TestData1.Name)

    await page.getByPlaceholder('Enter EMail').fill(TestData1.Email)

    await page.getByRole('textbox', { name: 'phone' }).fill(TestData1.Phone)

    await page.locator('#textarea').fill(TestData1.Address)

    await page.locator('.wikipedia-search-input').fill(TestData1.Wikipedia)

})

Then('I verify testadata2 from the Json File', async function () {

    await page.getByPlaceholder('Enter Name').fill(TestData2.Name)

    await page.getByPlaceholder('Enter EMail').fill(TestData2.Email)

    await page.getByRole('textbox', { name: 'phone' }).fill(TestData2.Phone)

    await page.locator('#textarea').fill(TestData2.Address)

    await page.locator('.wikipedia-search-input').fill(TestData2.Wikipedia)

})

Then('I verify testadata3 from the Json File', async function () {

    await page.getByPlaceholder('Enter Name').fill(TestData3.Name)

    await page.getByPlaceholder('Enter EMail').fill(TestData3.Email)

    await page.getByRole('textbox', { name: 'phone' }).fill(TestData3.Phone)

    await page.locator('#textarea').fill(TestData3.Address)

    await page.locator('.wikipedia-search-input').fill(TestData3.Wikipedia)

})

/*class work: handle filed1 and field2 using test data

and dropdownd handling using test data*/

Then('I verify dynamic web table in dynamic way', async function () {

    let webTable = await page.locator('//*[@id="taskTable"]').isVisible()

    if (webTable == true) {

        console.log(" web table is displayed in the web page ") //web table is displayed in the web page

        await page.locator('//*[@id="taskTable"]').scrollIntoViewIfNeeded()

        let rows = await page.locator("//*[@id='taskTable']/tbody/tr").all()

        if (rows.length > 0) {

            console.log("  web table have rows ")

            for (let i = 2; i <= rows.length; i++) {

                let columns = await page.locator("//*[@id='taskTable']/tbody/tr[" + i + "]/td").all()

                if (columns.length > 0) {

                    for (let j = 1; j <= columns.length; j++) {

                        // let expectedText = "Amod"

                        // let actualText = await page.locator("//*[@name='BookTable']/tbody/tr[" + i + "]/td[" + j + "]").innerText()

                        // if (actualText == expectedText) {

                        //     //Amod  code

                        //     //console.log(expectedText, " is displayed in the web table in row no :", i, " and column number is :", j)

                        //     //amod, " is displayed in the web table in row no :", 6, " and column number is :", 2
                        // }

                        let expectedText = "Firefox"

                        let actualText = await page.locator("//*[@id='taskTable']/tbody/tr[" + i + "]/td[" + j + "]").innerText()

                        if (actualText == expectedText) {

                            console.log(expectedText, " is displayed in the web table in row no :", i, " and column number is :", j)

                            //java, " is displayed in the web table in row no :", 3, " and column number is :", 1

                            //java, " is displayed in the web table in row no :", 3, " and column number is :", 3

                            //java, " is displayed in the web table in row no :", 4, " and column number is :", 3

                            //java, " is displayed in the web table in row no :", 6, " and column number is :", 1

                            //Java  is displayed in the web table in row no : 7  and column number is : 3
                        }
                    }
                }
                else {

                    console.log(" web table dosesn't have columns")
                }
            }
        }
        else {

            console.log("  web table doesn't have rows ")
        }
    }
    else {

        console.log(" web table is not displayed in the web page ")
    }
})

Then('I verify playwright filters', async function () {

    await page.goto('https://www.saucedemo.com/')

    await page.getByPlaceholder('Username').fill('standard_user')

    await page.getByPlaceholder('Password').fill('secret_sauce')

    await page.locator('#login-button').click()

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' }).getByRole('button', { name: 'Add to cart' }).click()

    await page.waitForTimeout(3000)

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Fleece Jacket' }).getByRole('button', { name: 'Add to cart' }).click()

    await page.waitForTimeout(3000)

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Onesie' }).getByRole('button', { name: 'Add to cart' }).click()

    await page.waitForTimeout(3000)

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' }).getByRole('button', { name: 'remove' }).click()

    await page.waitForTimeout(3000)

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Fleece Jacket' }).getByRole('button', { name: 'remove' }).click()

    await page.waitForTimeout(3000)

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Onesie' }).getByRole('button', { name: 'remove' }).click()

    await page.waitForTimeout(3000)

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('.form-check.form-check-inline')
        .filter({ hasText: 'Sunday' }).click()

    await page.waitForTimeout(3000)

    await page.locator('.form-check.form-check-inline')
        .filter({ hasText: 'Monday' }).click()

    await page.waitForTimeout(3000)

    await page.locator('.form-check.form-check-inline')
        .filter({ hasText: 'Fri' }).click()

    await page.waitForTimeout(3000)

    await page.locator('.form-check.form-check-inline')
        .filter({ hasText: 'male' }).last().click()

    await page.waitForTimeout(3000)

})

Then('I verify simple alert', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        var dialogText = dialog.message()

        console.log(dialogText) //I am a JS Alert

        dialog.accept()
    })

    await page.locator("//button[text()='Click for JS Alert']").click()

})


Then('I verify confirmation alert ok', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        page.waitForTimeout(4000)

        var dialogText = dialog.message()

        console.log(dialogText) //I am a JS Confirm

        dialog.accept()
    })

    await page.locator("//button[text()='Click for JS Confirm']").click()

})

Then('I verify confirmation alert cancel', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        page.waitForTimeout(4000)

        var dialogText = dialog.message()

        console.log(dialogText) //I am a JS Confirm

        dialog.dismiss()
    })

    await page.locator("//button[text()='Click for JS Confirm']").click()

})

Then('I verify Prompt alert ok without text', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        page.waitForTimeout(4000)

        var dialogText = dialog.message()

        console.log(dialogText) //I am a JS prompt

        dialog.accept()
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()

})

Then('I verify Prompt alert ok with text', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        page.waitForTimeout(4000)

        var dialogText = dialog.message()

        console.log(dialogText) //I am a JS prompt

        dialog.accept("hi qt team good morning")
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()

})

Then('I verify Prompt alert cancel', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        page.waitForTimeout(4000)

        var dialogText = dialog.message()

        console.log(dialogText) //I am a JS prompt

        dialog.dismiss()

        expect(page.locator("//*[@class='title']")).toContainText(['You entered: null'])

        expect(page.locator("//*[@class='title']")).toHaveText(['You entered: null'])

    })

    await page.locator("//button[text()='Click for JS Prompt']").click()
})

/* class work: using assertions verify alert result text is diaplying or not*/

Then('I verify testadata from the feature File {string},{string},{string},{string},{string}', async function (name, email, phone, address, wikipedia) {

    await page.getByPlaceholder('Enter Name').fill(name)

    await page.getByPlaceholder('Enter EMail').fill(email)

    await page.getByRole('textbox', { name: 'phone' }).fill(phone)

    await page.locator('#textarea').fill(address)

    await page.locator('.wikipedia-search-input').fill(wikipedia)
})

/*class work: handle filed1 and field2 using test data

and dropdowns handling using test data*/

Then('I verify playwright frames', async function () {

    await page.goto('https://the-internet.herokuapp.com/nested_frames')

    var allFramesCount = await page.frames()

    console.log("allFramesCount is :", allFramesCount.length) //allFramesCount is : 6

    //await page.framelocator/frame(xpath/url).locator().methods()

    //1st way

    var bottomText1stWay = await page.frameLocator('//*[@src="/frame_bottom"]').locator("//*[contains(text(),'BOTTOM')]").innerText()

    console.log("bottomText1stWay is :", bottomText1stWay) //BOTTOM

    //2nd way

    var bottomText = await page.frame({ url: 'https://the-internet.herokuapp.com/frame_bottom' })

    var bottomText2ndWay = await bottomText?.locator("//*[contains(text(),'BOTTOM')]").innerText()

    console.log("bottomText2ndWay is :", bottomText2ndWay) //BOTTOM

    /*allFramesCount is : 6
bottomText1stWay is : BOTTOM
bottomText2ndWay is : BOTTOM*/

    await page.goto('https://demo.automationtesting.in/Frames.html')

    allFramesCount = await page.frames()

    console.log("allFramesCount is :", allFramesCount.length) //allFramesCount is : 11

    var singleFrame = await page.frame({ url: 'https://demo.automationtesting.in/SingleFrame.html' })

    await singleFrame?.locator('//*[@type="text"]').first().fill('Quality')

    await page.waitForTimeout(3000)

    await page.getByText('Iframe with in an Iframe').click()

    await page.waitForTimeout(3000)

    var multiFrame = await page.frame({ url: 'https://demo.automationtesting.in/MultipleFrames.html' })

    var allChildFramesCount = await multiFrame?.childFrames()

    console.log("allChildFramesCount is :", allChildFramesCount?.length) //allChildFramesCount is : 1

    if (allChildFramesCount && allChildFramesCount.length > 0) {

        await allChildFramesCount[0].locator('//*[@type="text"]').last().fill('hi everyone good morning')
    }

})

Then('I verify playwright Waits', async function () {

    await page.goto('https://www.facebook.com/')

    console.log("=========wait for url========")

    // await page.waitForURL(url)

    await page.waitForURL('https://www.facebook.com/')

    console.log("=========wait for timeout========")

    //await page.waitForTimeout(8000) // 8000 means 8000 milliseconds that means 8 seconds

    // await page.waitForTimeout(10000) //  10000 means 10000 milliseconds that means 10 seconds

    await page.locator('//*[@name="email"]').fill('Quality')

    // await page.waitForTimeout(8000) // 8000 means 8000 milliseconds that means 8 seconds

    await page.locator('//*[@name="pass"]').fill('saturday')

    console.log("=========wait for selector========")

    /*syntax:
1st way:
await page.waitForSelector(webelement) 
2nd way
await page.waitForSelector(webelement, {timeout :8000}) // 8000 means 8000 milliseconds that means 8 seconds
*/

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.waitForTimeout(5000)

    //1st way

    await page.waitForSelector('//*[@name="username"]')

    await page.getByPlaceholder('Username').fill('Admin')

    //2nd way

    await page.waitForSelector('//*[@name="password"]', { timeout: 8000 }) //// 8000 means 8000 milliseconds that means 8 seconds

    await page.getByPlaceholder('Password').fill('admin123')

    console.log("=========wait for load========")

    //Syntax:Await page.waitForLoadstate()

    //1st way

    await page.waitForLoadState()

    await page.locator('//*[@type="submit"]').click()

    //2nd way

    await page.waitForLoadState('domcontentloaded') // html,css content is loading

    await page.getByText('Admin').click()

    //3rd way

    await page.waitForLoadState('domcontentloaded', { timeout: 10000 }) // html,css content is loading and 10 seconds

    await page.getByText('PIM').click()

    //4th way

    await page.waitForLoadState('load') // html,css content and images is loading

    await page.getByText('Leave').click()

    //5th way

    await page.waitForLoadState('load', { timeout: 10000 }) // html,css content and images is loading and 10 seconds

    await page.getByText('Time').click()

    //6th way

    await page.waitForLoadState('networkidle') // html,css content and images is loading and network issues like 400, 500 

    await page.getByText('Recruitment').click()

    //7th way

    await page.waitForLoadState('networkidle', { timeout: 10000 }) // html,css content and images is loading and network issues like 400, 500  and 10 seconds

    await page.getByText('My Info').click()

})

Then('verify playwright windows handling', async function () {

    browser = await chromium.launch({

        headless: false,

        args: ['--start-maximized']
    })

    context = await browser.newContext({

        viewport: null
    })

    let page1 = await context.newPage();

    let page2 = await context.newPage();

    let page3 = await context.newPage();

    var allPagesCount = await context.pages()

    console.log("allPagesCount is :", allPagesCount.length) //3

    await page1.goto('https://testautomationpractice.blogspot.com/')

    await expect(page1).toHaveTitle('Automation Testing Practice')

    await page2.goto('https://login.salesforce.com/')

    await expect(page2).toHaveTitle('Login | Salesforce')

    await page3.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await expect(page3).toHaveTitle('OrangeHRM')

    await page3.getByPlaceholder('Username').fill('Admin')

    await page3.getByPlaceholder('Password').fill('admin123')

    await page3.locator('//*[@type="submit"]').click()

    await page1.waitForTimeout(5000)

    console.log("========switching to first tab=======")

    await allPagesCount[0].bringToFront()

    await page1.getByText('New Tab').scrollIntoViewIfNeeded()

    await page3.waitForTimeout(3000)

    await page1.getByText('New Tab').click()

    await page3.waitForTimeout(5000)

    allPagesCount = await context.pages()

    console.log("allPagesCount is :", allPagesCount.length) //4

    console.log("===========close the 4th tab========")

    await allPagesCount[3].close()

    console.log("========switching to second tab=======")

    await allPagesCount[1].bringToFront()

    await page2.getByLabel('Username').fill('quality')

    await page2.waitForTimeout(3000)

    console.log("========switching to first tab=======")

    await allPagesCount[0].bringToFront()

    var pagePopup =  page1.waitForEvent('popup')

    await page1.getByText('Popup Windows').scrollIntoViewIfNeeded()

    await page1.waitForTimeout(3000)

    await page1.getByText('Popup Windows').click()

    await page1.waitForTimeout(5000)

    var popupPage = await pagePopup

    console.log(popupPage.title())

    console.log(popupPage.url())

    allPagesCount = await context.pages()

    console.log("allPagesCount is :", allPagesCount.length) //5

    console.log("===========close the 4th tab means popup tab========")

    await allPagesCount[3].close()

    console.log("===========close the complete browser========")

    await context.close()

})