const { screenShot } = require("../utils/fileNumbering");

function windowOpen() {
  browser.url("http://195.148.23.226");
  browser.maximizeWindow();
  screenShot();
}
module.exports = { windowOpen };
