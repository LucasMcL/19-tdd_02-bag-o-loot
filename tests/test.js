const {assert} = require('chai')

// Testing for parse arguments method
const {parseArgs} = require('../src/parse-args.js')
describe('parseArgs method', function() {
	it('should return an object', function() {
		assert.isObject(parseArgs())
	})
	it('should be a function', function() {
		assert.isFunction(parseArgs)
	})
})
