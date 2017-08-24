/* eslint-env jest */
describe('add', () => {
  const add = require('.').add
  it('adds numbers', () => {
    expect(add(1, 2)).toBe(3)
  })
})
describe('sub', () => {
  const sub = require('.').sub
  it('subs numbers', () => {
    expect(sub(1, 2)).toBe(-1)
  })
})
