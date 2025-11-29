// testData.js

module.exports = [
  {
    testName: "Valid Login",
    username: "tomsmith",
    password: "SuperSecretPassword!",
    expectedText: "You logged into a secure area!"
  },
  {
    testName: "Invalid Password",
    username: "tomsmith",
    password: "wrongpassword",
    expectedText: "Your password is invalid!"
  },
  {
    testName: "Empty Username",
    username: "",
    password: "SuperSecretPassword!",
    expectedText: "Your username is invalid!"
  },
  {
    testName: "Empty Password",
    username: "tomsmith",
    password: "",
    expectedText: "Your password is invalid!"
  },
  {
    testName: "Whitespace Username",
    username: " tomsmith ",
    password: "SuperSecretPassword!",
    expectedText: "Your username is invalid!"
  }
];
