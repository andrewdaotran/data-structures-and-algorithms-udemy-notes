class MaxBinaryHeap {
	constructor() {
		this.values = []
	}

	insert(val) {
		this.values.push(val)
		let index = this.bubbleUp()
		return { [index]: val }
	}

	bubbleUp() {
		let index = this.values.length - 1
		let parentIndex = Math.floor((index - 1) / 2)
		let element = this.values[index]
		let parentElement = this.values[parentIndex]
		while (element > parentElement) {
			;[this.values[index], this.values[parentIndex]] = [
				this.values[parentIndex],
				this.values[index],
			]
			index = parentIndex
			parentIndex = Math.floor((index - 1) / 2)
			parentElement = this.values[parentIndex]
		}
		return index
	}
}

// child 2n + 1, 2n + 2
// parent Math.floor((n-1)/2)
let heap = new MaxBinaryHeap()

console.log(heap.insert(2))
console.log(heap.insert(2))
console.log(heap.insert(4))
console.log(heap.insert(5))
console.log(heap.insert(0))
console.log(heap.insert(2.5))
console.log(heap.insert(2100))

console.log(heap.values)
