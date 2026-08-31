const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');
  const username = page.getByTestId('username');
  const password = page.getByTestId('password');
  const loginButton = page.getByTestId('login-button');
  console.log('username visible:', await username.isVisible().catch(() => false));
  console.log('password visible:', await password.isVisible().catch(() => false));
  console.log('login visible:', await loginButton.isVisible().catch(() => false));
  await username.fill('standard_user');
  await password.fill('secret_sauce');
  await loginButton.click();
  console.log('url after login:', page.url());
  await browser.close();
})();
