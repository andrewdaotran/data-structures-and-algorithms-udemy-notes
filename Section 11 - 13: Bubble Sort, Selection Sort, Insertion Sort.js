// 70: Bubble Sort Implementation

// Unoptimized

const bubbleSort = (arr) => {
	// loop over arr
	// loop over arr again if j < arr.length - i
	// check if arr[j] > arr[j + 1]
	// if so, [arr[j], arr[j + 1]] = [arr[j+1], arr[j]]
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			}
		}
	}
	return arr
}

// Optimized

const bubbleSort = (arr) => {
	let noSwaps
	for (let i = 0; i < arr.length; i++) {
		//  assume no swaps
		noSwaps = true
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
				// if we get into this code block, we swapped
				noSwaps = false
			}
		}
		// check after j loop, if havent swapped then arr is sorted, break
		if (noSwaps) break
	}
	return arr
}

// 75: Selection Sort

const selectionSort = (arr) => {
	// loop over arr
	// initialize a variable min = i
	// loop again with j
	// initialize j = i + 1
	// check if arr[j] < arr[min]
	// if so, min = j
	// if i !== min, swap arr[i] and arr[min]
	for (let i = 0; i < arr.length; i++) {
		let min = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) min = j
		}
		if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]]
	}
	return arr
}

// 79: Insertion Sort

const insertionSort = (arr) => {
	// loop over arr starting with second index
	// initialize an index variable to keep track of swapping index
	for (let i = 1; i < arr.length; i++) {
		let index = i
		for (let j = i - 1; j >= 0; j--) {
			if (arr[j] > arr[index]) {
				;[arr[j], arr[index]] = [arr[index], arr[j]]
				index--
			}
		}
	}
	// loop again j = i - 1 while j >= 0 j--
	// check if arr[j] > arr[i]
	// if so, swap then decrement index variable
	// if not, break
	return arr
}
