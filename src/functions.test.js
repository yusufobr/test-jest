const {stringLength, reverseString, Calculator, capitalize} = require('./functions')


describe('Test the string functions', () => {

    it('should count the characters of a string', () => {
        expect(stringLength('hello')).toBe(5)
    })
    
    it('should throw invalid string', () => {
        expect(() => stringLength('')).toThrow('the string is invalid')
    })
    
    it('should reverse the string', () => {
        expect(reverseString('hello')).toBe('olleh')
    })
    
})

describe('Test the Calculator class', () => {
    const calculator = new Calculator()

    test('the sum', () => {
        expect(calculator.add(1, 2)).toBe(3)
    })

    test('the subtract', () => {
        expect(calculator.subtract(3, 2)).toBe(1)
    })

    test('the divide', () => {
        expect(calculator.divide(8, 2)).toBe(4)
    })

    test('the multiply', () => {
        expect(calculator.multiply(4, 3)).toBe(12)
    })

})

describe('Capitalized the first character', () => {
    const capitalizeFirstChar = capitalize('hello world')
    it('should capitalized the first char', () => {
        expect(capitalizeFirstChar).toBe('Hello world')
    })
})