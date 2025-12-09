// tests/sample.test.js
const { add, getAppVersion } = require("../custom/main.js");

test("add(2, 3) should equal 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("getAppVersion() should return 1.0.0", () => {
  expect(getAppVersion()).toBe("1.0.0");
});
