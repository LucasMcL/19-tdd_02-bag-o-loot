const {assert} = require('chai')

// Testing for parse arguments method
const {checkArgs} = require('../src/parse-args.js')
describe('checkArgs method', function() {
	it('should be a function', function() {
		assert.isFunction(checkArgs)
	})

	describe('return an error when', function() {
		it('the first argument is not within the list of correct words', function() {
			const err = checkArgs(['dumbUserInput'])
			assert.isNotNull(err)
			assert.isDefined(err)
		})
		it('there were no arguments passed', function() {
			const err = checkArgs([])
			assert.isNotNull(err)
			assert.isDefined(err)
		})
		it('the user tries to remove without specifying toy and child', function() {
			const err1 = checkArgs(['remove', 'toy'])
			const err2 = checkArgs(['remove', 'michael'])
			assert.isNotNull(err1); assert.isNotNull(err2)
			assert.isDefined(err1); assert.isDefined(err2)
		})
	})
})

describe('db-calls', function() {
	const {addChild, addToy, addGift, changeDelivered} = require('../src/db-calls.js')
	describe('add toy', function() {
		it('should add a toy to the toys table', function() {

		})
	})
	describe('add child', function() {
		it('should add a child to the children table', function() {

		})
	})
	describe('add gift', function() {
		it('should add a gift table', function() {

		})
	})
	describe('change delivered', function() {
		it('should change toy delivered for a specific child', function() {

		})
	})
})














