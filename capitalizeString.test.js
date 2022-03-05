const {capitalizeCharAt} = require('./capitalizeString')

describe('capitalize string', () => {
  test('capitalize first letter in a string', () => {
    expect(capitalizeCharAt('nigeria')).toMatch('Nigeria')
  })
  test('capitalize first letter in a string', () => {
    expect(capitalizeCharAt('peter')).toMatch('Peter')
  })
})