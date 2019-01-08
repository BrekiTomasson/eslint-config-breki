const options = require('../src/options')

describe('options test suite', () => {
  it('exports an object', () => {
    expect(options).toBeDefined()
  })

  it('has a command named lint', () => {
    expect(options.cmd).toBe('lint')
  })

  it('should have cwd that is empty', () => {
    expect(options.cwd).toBe('')
  })

  it('should contain an eslint object', () => {
    expect(options.eslint).toHaveProperty
  })

  it('should have a bugs URL', () => {
    expect(options.bugs).toContain('BrekiTomasson')
  })
})
