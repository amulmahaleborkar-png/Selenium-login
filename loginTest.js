// loginTest.js

const { Builder, By, until } = require('selenium-webdriver');

async function runLoginTest(testName, username, password, expectedText) {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    console.log(`\n🔹 Running: ${testName}`);

    // 1. Open page
    await driver.get('https://the-internet.herokuapp.com/login');

    // 2. Locate elements
    const usernameInput = await driver.findElement(By.id('username'));
    const passwordInput = await driver.findElement(By.id('password'));
    const loginButton = await driver.findElement(By.css('button[type="submit"]'));

    // 3. Enter data
    await usernameInput.sendKeys(username);
    await passwordInput.sendKeys(password);

    // 4. Click login
    await loginButton.click();

    // 5. Wait for alert message
    const alertElement = await driver.wait(
      until.elementLocated(By.id('flash')),
      5000
    );

    const alertText = await alertElement.getText();
    console.log('👉 Actual message:', alertText.trim());

    // 6. Assertion
    if (alertText.includes(expectedText)) {
      console.log(`✅ ${testName} PASSED`);
    } else {
      console.log(`❌ ${testName} FAILED`);
      console.log(`   Expected to contain: "${expectedText}"`);
    }
  } catch (err) {
    console.error(`❌ ${testName} CRASHED:`, err);
  } finally {
    await driver.quit();
  }
}

  async function run() {
  // Test 1: Valid login
  await runLoginTest(
    'Valid Login Test',
    'tomsmith',
    'SuperSecretPassword!',
    'You logged into a secure area!'
  );

  // Test 2: Invalid password
  await runLoginTest(
    'Invalid Password Test',
    'tomsmith',
    'wrongpassword',
    'Your password is invalid!'
  );

  // Test 3: Empty username
  await runLoginTest(
    'Empty Username Test',
    '',
    'SuperSecretPassword!',
    'Your username is invalid!'
  );

  // Test 4: Empty Password Test
  await runLoginTest(
    'Empty Password Test',
    'tomsmith',
    '',
    'Your password is invalid!'
  );
}

run();
