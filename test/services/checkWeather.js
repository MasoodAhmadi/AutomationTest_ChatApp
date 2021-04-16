const { screenShot } = require("../utils/fileNumbering");

function checkWeather(variable, value) {
  const { weatherField, weatherButton } = variable;
  $(weatherField).click();
  $(weatherField).clearValue();
  browser.pause(1000);
  $(weatherField).addValue(value);
  $(weatherButton).click();
  screenShot();
  browser.pause(5000);
}
module.exports = { checkWeather };
