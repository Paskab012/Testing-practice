const { charCount, reverseStr } = require('./app.js');

test('The number of characters are', () => {
  let str = "string"
  const numberOfChars = charCount(str)
  expect(numberOfChars).toBe(6)
})

test('The number of characters to be greater than 0', () => {
  let str = "string"
  const numberOfChars = charCount(str) 
  expect(numberOfChars).toBeGreaterThan(0)
})

test('The number of characters to be less or equal 10', () => {
  let str = "string"
  const numberOfChars = charCount(str) 
  expect(numberOfChars).toBeLessThan(10)
})

test('String should be reversed', () => {
  let str = "string"
  const reverse = reverseStr(str) 
  expect(reverse).toMatch('gnirts')
})



