const calculator = require('./calculator.js')

describe('calculator', () => {
  describe("add a given numbers", () => {
    test('add calculator variables', () => {
		expect(calculator.add(2, 3)).toBe(5)
  })
    test('add calculator variables', () => {
		expect(calculator.add(7, 3)).toBe(10)
  })
    test('add calculator variables', () => {
		expect(calculator.add(2, -2)).toBe(0)
    })
    
  })

    describe('substract a given numbers', () => {
			test('substract calculator variables', () => {
				expect(calculator.substract(2, 3)).toBe(-1)
			})
			test('substract calculator variables', () => {
				expect(calculator.substract(7, 3)).toBe(4)
			})
			test('substract calculator variables', () => {
				expect(calculator.substract(2, -2)).toBe(4)
			})
		})
    
    describe('multiply a given numbers', () => {
			test('multiply calculator variables', () => {
				expect(calculator.multiply(2, 3)).toBe(6)
			})
			test('multiply calculator variables', () => {
				expect(calculator.multiply(7, 3)).toBe(21)
			})
			test('multiply calculator variables', () => {
				expect(calculator.multiply(2, -2)).toBe(-4)
			})
		})

    describe('divide a given numbers', () => {
			test('divide calculator variables', () => {
				expect(calculator.divide(6, 3)).toBe(2)
			})
			test('divide calculator variables', () => {
				expect(calculator.divide(50, 5)).toBe(10)
			})
			test('divide calculator variables', () => {
				expect(calculator.divide(2, -2)).toBe(-1)
			})
		})
})