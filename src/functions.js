const stringLength = (str) => {
    if(typeof str !== 'string' || str.length < 1 || str.length > 10) throw new Error('the string is invalid')
    return str.length
};


const reverseString = (str) => str.split('').reverse().join('')


class Calculator {
    add = (a, b) => a + b
    subtract = (a, b) => a - b
    divide = (a, b) => a / b
    multiply = (a, b) => a * b
}


const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)



module.exports = {stringLength, reverseString, Calculator, capitalize}