let index = 1;

function screenShot() {
  browser.saveScreenshot(`./test/Images/screen${index}.png`);
  index++;
}

module.exports = { screenShot };
