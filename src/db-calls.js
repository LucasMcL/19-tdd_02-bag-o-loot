'use strict'

// This module exports methods for interacting with the database


////////////////////////////
// Getters
////////////////////////////

const getChildId = function(childName) {
	const {Database} = require('sqlite3')
	const db = new Database('data/lootbag.sqlite')

	return new Promise((resolve, reject) => {
		db.get(`select childId from children where childName = '${childName}';`, function(err, row) {
			if(err) reject(err)
			if(!row) resolve(0)
			else resolve(row.childId)
		})
	})
}

const getToyId = function(toyName) {
	const {Database} = require('sqlite3')
	const db = new Database('data/lootbag.sqlite')

	return new Promise((resolve, reject) => {
		db.get(`select toyId from toys where toyName = '${toyName}';`, function(err, row) {
			if(err) reject(err)
			if(!row) resolve(0)
			else resolve(row.toyId)
		})
	})
}

const getChildrenWithGifts = function() {
	const {Database} = require('sqlite3')
	const db = new Database('data/lootbag.sqlite')

	return new Promise((resolve, reject) => {
		db.all(`select distinct c.childName
						from gifts as g, children as c
						on g.childId = c.childId`, function(err, data) {
							if(err) reject(err)
							resolve(data)
						})
	})
}

const getGiftsForChild = function(childName) {
	const {Database} = require('sqlite3')
	const db = new Database('data/lootbag.sqlite')

	return new Promise((resolve, reject) => {
		db.all(`select t.toyName
						from gifts as g, toys as t on g.toyId = t.toyId
						join children as c on g.childId = c.childId
						where c.childName = '${childName}';`, function(err, data) {
							if(err) reject(err)
							resolve(data)
						})
	})
}


////////////////////////////
// Setters
////////////////////////////

const addChild = function(childName) {
	const {Database} = require('sqlite3')
	const db = new Database('data/lootbag.sqlite')

	return new Promise((resolve, reject) => {
		db.run(`insert into children (childId, childName)
						values (null, '${childName}');`, err => {
							if(err) reject(err)
							resolve()
						})
	})
}

const addToy = function(toyName) {
	const {Database} = require('sqlite3')
	const db = new Database('data/lootbag.sqlite')

	return new Promise((resolve, reject) => {
		db.run(`insert into toys (toyId, toyName)
						values (null, '${toyName}');`, err => {
							if(err) reject(err)
							resolve()
						})
	})
}

const addGift = function(childName, toyName) {
	const {Database} = require('sqlite3')
	const db = new Database('data/lootbag.sqlite')

	return new Promise((resolve, reject) => {
		db.run(`
			INSERT INTO gifts (childId, toyId)
			select childId, toyId
			from children as c, toys as t
			where c.childName = '${childName}' and t.toyName = '${toyName}';`, err => {
				if(err) reject(err)
				resolve()
			})
	})
}

const changeDelivered = function(childName) {
	const {Database} = require('sqlite3')
	const db = new Database('data/lootbag.sqlite')

	return new Promise((resolve, reject) => {
		db.run(`UPDATE children
						SET toysDelivered=1
						WHERE childName = '${childName}';`, err => {
							if(err) reject(err)
							resolve()
						})
	})
}

////////////////////////////
// Removers (and shakers)
////////////////////////////

const removeGift = function(childName, toyName) {
	const {Database} = require('sqlite3')
	const db = new Database('data/lootbag.sqlite')

	return new Promise((resolve, reject) => {
		db.run(`
			delete
			from gifts
			where childId =
				(select childId from children where childName = '${childName}')
			and toyId =
				(select toyId from toys where toyName = '${toyName}');`, err => {
				if(err) reject(err)
				resolve()
			})
	})
}






module.exports = {
	addChild,
	addToy,
	addGift,
	changeDelivered,
	getChildId,
	getToyId,
	getChildrenWithGifts,
	getGiftsForChild,
	removeGift
}




