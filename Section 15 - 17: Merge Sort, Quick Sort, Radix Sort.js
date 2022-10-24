// 86 - 88: Merge Sort Implementation

const merge = (arr1, arr2) => {
	// initialize two variables i = 0, j = 0
	let i = 0
	let j = 0
	// initialize an empty array, mergedArr = []
	let mergedArr = []
	// while (i < arr1.length || j < arr2.length)
	// compare if arr1[i] < arr2[j]
	// if so
	// mergedArr.push(arr1[i])
	// i++
	// if not,
	// mergedArr.push(arr2[j])
	// j++
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			mergedArr.push(arr1[i])
			i++
		} else {
			mergedArr.push(arr2[j])
			j++
		}
	}
	// if i < arr1.length
	// mergedArr.concat(arr1)
	// if j < arr2.length
	// mergedArr.concat(arr2)
	while (i < arr1.length) {
		mergedArr.push(arr1[i])
		i++
	}
	while (j < arr2.length) {
		mergedArr.push(arr2[j])
		j++
	}
	return mergedArr
}

const mergeSort = (arr) => {
	// check if arr.length === 1, if so return arr
	if (arr.length <= 1) return arr
	// initialize middle = Math.floor(arr.length / 2)
	let middle = Math.floor(arr.length / 2)
	// left = mergeSort(arr.slice(0, middle))
	let left = mergeSort(arr.slice(0, middle))
	// right = mergeSort(arr.slice(middle))
	let right = mergeSort(arr.slice(middle))
	return merge(left, right)
}

// 93 - 94: Quick Sort Implementation

const pivot = (arr, start, end) => {
	let pivot = arr[start]
	//  initialize a tracker variable to track how many numbers are less than arr[start]
	let tracker = start
	// loop over arr up until end and start at start + 1
	for (let i = start + 1; i <= end; i++) {
		let currentNumber = arr[i]
		// check if arr[i] < arr[start], if so, increment tracker and swap arr[i] with arr[tracker]
		if (currentNumber < pivot) {
			tracker++
			;[arr[i], arr[tracker]] = [arr[tracker], arr[i]]
		}
	}
	// swap pivot with arr[tracker]
	;[arr[start], arr[tracker]] = [arr[tracker], arr[start]]
	return tracker
}

const quickSort = (arr, start = 0, end = arr.length - 1) => {
	// check if start and end are equal, if so, return
	if (start < end) {
		let pivotIndex = pivot(arr, start, end)
		quickSort(arr, start, pivotIndex - 1)
		quickSort(arr, pivotIndex + 1, end)
	}
	return arr
}

// 101: Radix Sort Implementation

// My solution for getDigit
const getDigit = (num, digit) => {
	let strNum = String(num)
	let digitArr = strNum.split('').reverse()
	if (digit > digitArr.length - 1) return 0
	return digitArr[digit]
}
// My solution for digitCount
const digitCount = (num) => {
	return String(num).length
}
// Optimal/Math solution for getDigit
const getDigit = (num, digit) => {
	return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10
}
// Math solution for digitCount
const digitCount = (num) => {
	if (num === 0) return 0
	return Math.floor(Math.log10(Math.abs(num))) + 1
}
// Solution for mostDigits
function mostDigits(nums) {
	let maxDigits = 0
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]))
	}
	return maxDigits
}
const radixSort = (nums) => {
	// use mostDigits function to find the most times we have to loop and store it in a variable maxDigits
	const maxDigits = mostDigits(nums)
	// loop over nums
	// organize each number into their respective buckets based on the digit
	// assign arr the value of the concatenation of the bucket array
	for (let k = 0; k < maxDigits; k++) {
		let buckets = Array.from({ length: 10 }, () => [])
		for (let i = 0; i < nums.length; i++) {
			let digitValue = getDigit(nums[i], k)
			buckets[digitValue].push(nums[i])
		}
		nums = [].concat(...buckets)
	}
	return nums
}
