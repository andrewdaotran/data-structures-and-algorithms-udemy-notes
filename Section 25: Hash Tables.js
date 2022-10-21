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
