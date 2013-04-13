"use strict"

var assert = require('assert')
var rework = require('rework')
var important = require('../')

var read = require('fs').readFileSync

var inFile = __dirname + '/input.css'
var css = rework(read(inFile, 'utf8'))
  .use(important)
  .toString()

var expectedFile = __dirname + '/expected-output.css'

var expected = read(expectedFile, 'utf8').trim()

it('adds !important statements', function() {
  assert.equal(css, expected)
})

