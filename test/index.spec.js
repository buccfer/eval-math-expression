'use strict'

const { expect } = require('chai')
const calculate = require('../src')

describe('Example', () => {
  it('Should pass if expression is just a number', () => {
    expect(calculate('88')).to.equal(88)
  })

  it('Should pass if expression only includes "+" and "-"', () => {
    expect(calculate('100+23')).to.equal(123)
    expect(calculate('5-10')).to.equal(-5)
    expect(calculate('100+87-1508')).to.equal(-1321)
  })

  it('Should pass if expression only includes "*" and "/"', () => {
    expect(calculate('8*5')).to.equal(40)
    expect(calculate('121/11')).to.equal(11)
    expect(calculate('4*10/2')).to.equal(20)
  })

  it('Should pass if expression contains a combination of "+", "-", "/" and "*"', () => {
    expect(calculate('30*40+80/20-18')).to.equal(1186)
  })
})
