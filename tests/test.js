const {assert} = require('chai')

// Testing for parse arguments method
const {checkArgs} = require('../src/parse-args.js')
describe('checkArgs method', function() {
	it('should return an object', function() {
		assert.isObject(checkArgs(['dumbUserInput']))
	})
	it('should be a function', function() {
		assert.isFunction(checkArgs)
	})

	describe('return an error when', function() {
		it('the first argument is not within the list of correct words', function() {
			const {err} = checkArgs(['dumbUserInput'])
			assert.isNotNull(err)
			assert.isDefined(err)
		})
		it('there were no arguments passed', function() {
			const {err} = checkArgs([])
			assert.isNotNull(err)
			assert.isDefined(err)
		})
		it('the user tries to remove without specifying toy and child', function() {
			const {err: err1} = checkArgs(['remove', 'toy'])
			const {err: err2} = checkArgs(['remove', 'michael'])
			assert.isNotNull(err1); assert.isNotNull(err2)
			assert.isDefined(err1); assert.isDefined(err2)
		})
	})
})
