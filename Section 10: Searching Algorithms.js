// Coding Exercise 25: Binary Search Exercise

function binarySearch(sortedArr, val) {
	// sortArr
	//   initialize a left = 0, right = sortedArr.length - 1, middle = Math.floor(right + left / 2)
	let left = 0
	let right = sortedArr.length - 1
	let middle = Math.floor((right + left) / 2)
	// loop using a while loop, while left < right
	// if sortedArr[middle] === val,
	// return middle
	// if  sortedArr[middle] < val,
	// left = middle + 1, middle =  Math.floor(right + left / 2)
	// if sortedArr[middle] > val
	// right = middle - 1, middle =  Math.floor(right + left / 2)
	while (left <= right) {
		if (sortedArr[middle] === val) {
			return middle
		} else if (sortedArr[middle] < val) {
			left = middle + 1
			middle = Math.floor((right + left) / 2)
		} else if (sortedArr[middle] > val) {
			right = middle - 1
			middle = Math.floor((right + left) / 2)
		}
	}
	// if while loop ends without return, return -1
	return -1
}
