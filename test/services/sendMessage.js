const { screenShot } = require("../utils/fileNumbering");

function sendMessage(variable, message) {
  const { messageField, sendButton } = variable;
  $(messageField).click();
  $(messageField).addValue(message);
  $(sendButton).click();
  screenShot();
  browser.pause(3000);
}
module.exports = { sendMessage };
