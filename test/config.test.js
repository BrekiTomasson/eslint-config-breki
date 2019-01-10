/**
 * The "Options" object to be tested in this file.
 */
const options = require('../src/config')

describe('Options -> Linter', () => {
  it('exports an object', () => {
    expect(options).toBeDefined()
  })

  it('has a command named lint', () => {
    expect(options.linter.cmd).toBe('lint')
  })

  it('should have cwd that is empty', () => {
    expect(options.linter.cwd).toBe('')
  })

  it('should contain an eslint object', () => {
    expect(options.linter).toHaveProperty('eslint')
  })

  it('should have a bugs URL', () => {
    expect(options.linter.bugs).toContain('BrekiTomasson')
  })
})

describe('Options -> Plugins', () => {
  it('has a plugin array', () => {
    expect(options.plugins).toBeDefined()
  })
})
