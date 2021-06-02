const lrcPages = require('..')

// TODO: Implement module test
test('lrc-pages', () => {
  expect(lrcPages('w')).toBe('w@zce.me')
  expect(lrcPages('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  expect(() => lrcPages(100)).toThrow('Expected a string, got number')
})
