'use strict'

/**
 * @summary Calculates the string mathematical expression.
 *
 * @param {string} str - The mathematical expression.
 *
 * @returns {number} The result of evaluating the given mathematical expression.
 * */
function calculate(str) {
  if (/^\d+$/.test(str)) {
    return parseInt(str, 10)
  }

  const terms = str.split(/(\+|-)/)

  const processedTerms = terms.map((term) => {
    if (['+', '-'].includes(term)) {
      return term
    }

    if (/^\d+$/.test(term)) {
      return parseInt(term, 10)
    }

    const splitTerm = term.split(/(\*|\/)/)
    let termResult = parseInt(splitTerm[0], 10)

    for (let i = 1; i < splitTerm.length; i += 2) {
      const operator = splitTerm[i]
      const operand = parseInt(splitTerm[i + 1], 10)

      if (operator === '*') {
        termResult *= operand
      } else {
        termResult /= operand
      }
    }

    return termResult
  })

  let result = processedTerms[0]

  for (let j = 1; j < processedTerms.length; j += 2) {
    const operator = processedTerms[j]
    const operand = processedTerms[j + 1]

    if (operator === '+') {
      result += operand
    } else {
      result -= operand
    }
  }

  return result
}

module.exports = calculate
