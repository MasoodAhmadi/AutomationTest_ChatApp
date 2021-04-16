const {
  logOut,
  userLogin,
  windowOpen,
  sendMessage,
  checkWeather,
} = require("../services/");
const variable = require("../../config.json");

describe("ChatApp test with webdriverIO", () => {
  it("user one can open baseurl of chatapp>", () => {
    windowOpen();
  });
  it("user one can login to chatapp", () => {
    const { usernameOne, userpassOne } = variable;
    userLogin(variable, usernameOne, userpassOne);
  });
  it("user one can send text to enduser", () => {
    const { messageOne } = variable;
    sendMessage(variable, messageOne);
  });
  it("user one can check weather station", () => {
    const { valueOne } = variable;
    checkWeather(variable, valueOne);
  });
  it("user one can logout from chatapp", () => {
    logOut(variable);
  });
  it("user two can login to chatapp", () => {
    const { usernameTwo, userpassTwo } = variable;
    userLogin(variable, usernameTwo, userpassTwo);
  });
  it("user two can send text to enduser", () => {
    const { messageTwo } = variable;
    sendMessage(variable, messageTwo);
  });
  it("user two one can check weather station", () => {
    const { valueTwo } = variable;
    checkWeather(variable, valueTwo);
  });
});
