/**
 * The "Options" object to be tested in this file.
 */
const options = require('../../options')

describe('options test suite', () => {
  it('exports an object', () => {
    expect.hasAssertions(
      expect(options).toBeDefined()
    )
  })

  it
  ('has a command named lint', () => {
    expect.hasAssertions(
      expect(options.cmd)
        .toBe('lint')
    )
  })

  it('should have cwd that is empty', () => {
    expect.hasAssertions(
      expect(options.cwd).toBe('')
    )
  })

  it('should contain an eslint object', () => {
    expect.hasAssertions(
      expect(options.eslint).toBeDefined()
    )
  })

  it('should have a bugs URL', () => {
    expect.hasAssertions(
      expect(options.bugs).toContain('BrekiTomasson')
    )
  })
})
