'use strict'

const { expect } = require('chai')
const foo = require('../src')

describe('Example', () => {
  it('Should pass', () => {
    expect(foo).to.be.a('function')
    expect(foo.length).to.equal(0)
    expect(foo()).to.equal('bar')
  })
})
