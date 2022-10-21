// Simple Hash Function

const simpleHash = (key, arrayLength) => {
	let total = 0
	for (let char of key) {
		let value = char.charCodeAt(0) - 96
		total = (total + value) % arrayLength
	}
	return total
}

// Better Hash Function

const betterHash = (key, arrayLength) => {
	let total = 0
	let WEIRD_PRIME = 31
	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let char = key[i]
		let value = char.charCodeAt(0) - 96
		total = (total * WEIRD_PRIME + value) % arrayLength
	}
	return total
}

// Handling Collisions
// Separate Chaining
// store in an array and when searching, loop through array until you find the value of the key you're looking for
// Linear Probing
// Store in the next available, empty slot
// hash and get 4, store in 4, next also gets 4, store in 5, next also gets 4, store in 6...
// unlike store only one thing in each slot unlike separate chaining

class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size)
	}

	_hash(key) {
		let total = 0
		let WEIRD_PRIME = 31
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i]
			let value = char.charCodeAt(0) - 96
			total = (total * WEIRD_PRIME + value) % this.keyMap.length
		}
		return total
	}

	set(key, value) {
		let index = this._hash(key)
		if (!Array.isArray(this.keyMap[index])) {
			this.keyMap[index] = []
		}
		this.keyMap[index].push([key, value])
	}
	get(key) {
		let index = this._hash(key)
		if (this.keyMap[index]) {
			for (let item of this.keyMap[index]) {
				if (item[0] === key) return item[1]
			}
		}
		return undefined
	}
}

console.log('hello')

let table = new HashTable(10)

table.set('purple', 'stuffed')
table.set('teal', 'stuff')
table.set('teak', 'stufl')
table.set('blue', 'marill')
console.log(table.get('blue'))
console.log(table.get('tel'))
console.log(table)
