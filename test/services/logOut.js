const { screenShot } = require("../utils/fileNumbering");

function logOut(variable) {
  const { logoutButton } = variable;
  $(logoutButton).click();
}
module.exports = { logOut };
