const options = require('../options')

describe("options", () => {
  test("exports an object", () => {
    expect(options).toBeDefined()
  })

  test("should have command named lint", () => {
    expect(options.cmd).toBe("lint")
  })

  test("should have cwd that is empty", () => {
    expect(options.cwd).toBe("")
  })

  test("should have a bugs URL", () => {
    expect(options.bugs).toBe("https://github.com/BrekiTomasson/breki-eslint-config/issues")
  })

})
