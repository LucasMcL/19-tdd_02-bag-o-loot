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

	describe('return an error when', function() {
		it('the first argument is not within the list of correct words', function() {
			const {err} = parseArgs(['puppies', 'suzy', 'add'])
			assert.isNotNull(err)
		})
		it('should ...', function() {

		})
	})
})
