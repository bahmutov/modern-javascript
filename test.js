/* eslint-env jest */
describe('add', () => {
  const add = require('.').add
  it('adds numbers', () => {
    expect(add(1, 20)).toMatchSnapshot()
    expect(add(100, -50)).toMatchSnapshot()
  })
})
describe('sub', () => {
  const sub = require('.').sub
  it('subs numbers', () => {
    expect(sub(1, 2)).toBe(-1)
  })
})
