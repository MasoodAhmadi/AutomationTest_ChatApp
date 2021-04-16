const { screenShot } = require("../utils/fileNumbering");

function userLogin(variable, username, password) {
  const { usernameField, passwordField, submitButton } = variable;
  $(usernameField).click();
  $(usernameField).addValue(username);
  $(passwordField).click();
  $(passwordField).addValue(password);
  $(submitButton).click();
  screenShot();
  browser.pause(3000);
}
module.exports = { userLogin };
