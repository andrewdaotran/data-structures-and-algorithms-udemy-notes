class Node {
	constructor(val) {
		this.value = val
		this.next = null
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	push(val) {
		let newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
		this.length++
		return this
	}

	pop() {
		if (this.length === 0) return undefined
		let currentNode = this.head
		let nextNode
		for (let i = 0; i < this.length; i++) {
			if (currentNode.next !== this.tail) {
				currentNode = currentNode.next
			} else {
				nextNode = currentNode.next
				currentNode.next = null
				this.tail = currentNode
				this.length--
				if (this.length === 0) {
					this.head = null
					this.tail = null
				}
				return nextNode
			}
		}
	}

	shift() {
		if (this.length === 0) return undefined
		let prevHead = this.head
		this.head = this.head.next
		prevHead.next = null
		this.length--
		if (this.length === 0) {
			this.head = null
			this.tail = null
		}
		return prevHead
	}

	unshift(val) {
		const newNode = new Node(val)
		if (this.length === 0) {
			this.head = newNode
			this.tail = newNode
		} else {
			newNode.next = this.head
			this.head = newNode
		}
		this.length++
		return this
	}

	get(index) {
		if (index < 0 || index > this.length) return null
		if (this.length === 0) return undefined
		let currentNode = this.head
		for (let i = 0; i <= index; i++) {
			if (i !== index) {
				currentNode = currentNode.next
			} else {
				return currentNode
			}
		}
	}

	set(index, val) {
		let node = this.get(index)
		if (node) {
			node.value = val
			return true
		}
		return false
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false
		if (index === this.length) return Boolean(this.push(val))
		if (index === 0) return Boolean(this.unshift(val))
		let newNode = new Node(val)
		let prevNode = this.get(index - 1)
		let nextNode = prevNode.next
		prevNode.next = newNode
		newNode.next = nextNode
		this.length++
		return true
	}

	remove(index) {
		if (index < 0 || index >= this.length) return false
		if (index === this.length - 1) return this.pop()
		if (index === 0) return this.shift()
		let prevNode = this.get(index - 1)
		let removed = prevNode.next
		prevNode.next = removed.next
		removed.next = null
		this.length--
		return removed
	}
	reverse() {
		if (this.length === 1 || this.length === 0) return this
		let current = this.head
		;[this.tail, this.head] = [this.head, this.tail]
		let next
		let prev = null
		for (let i = 0; i < this.length; i++) {
			next = current.next
			current.next = prev
			prev = current
			current = next
		}
		return this
	}
}
