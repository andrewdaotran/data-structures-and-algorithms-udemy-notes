// Coding Exercise 3: Frequency Counter sameFrequency Solution

function sameFrequency(numOne, numTwo) {
	//   turn numbers into strings and store them into variables numOne and numTwo
	let stringOne = String(numOne)
	let stringTwo = String(numTwo)
	// if numOne.length !== numTwo.length then return false
	if (stringOne.length !== stringTwo.length) return false
	// hash numOne into an object, the key being the string value and the value being the frequency that string value shows up
	let hash = {}
	for (let i = 0; i < stringOne.length; i++) {
		hash[stringOne[i]] = (hash[stringOne[i]] || 0) + 1
	}
	// loop over string
	// loop over numTwo and check if the hashed object contains a key of that string value
	for (let j = 0; j < stringTwo.length; j++) {
		if (hash.hasOwnProperty(stringTwo[j])) {
			hash[stringTwo[j]]--
		} else {
			return false
		}
	}
	// if hash.hasOwnProperty[numTwo[j]], hash[numTwo[j]] - 1
	// if does not, return false
	return true
}

// Coding Exercise 4: Frequency Counter / Multiple Pointers - areThereDuplicates

// Frequency Counter Solution

function areThereDuplicates() {
	//   loop over the arguments array and hash into new object
	let hash = {}
	for (let i = 0; i < arguments.length; i++) {
		if (hash[arguments[i]] === 1) {
			return true
		} else {
			hash[arguments[i]] = 1
		}
	}
	// if any value is greater than one return true
	// if not, return false
	return false
}

// Two Pointers Solution

function areThereDuplicates() {
	// initialize two variables to 0 and 1 of
	let left = 0
	let right = 1
	// sort arguments array with .sort method
	// arguments.sort()
	let newArr = [...arguments]
	newArr.sort()
	// loop through arguments array and check if arguments[first] === arguments[second]
	while (right <= newArr.length) {
		if (newArr[left] === newArr[right]) {
			return true
		} else {
			left++
			right++
		}
	}
	// if true, return true
	// if false, increment both variables
	return false
}

// Coding Exercise 5: Multiple Pointers - averagePair

function averagePair(arr, targetAvg) {
	// check if array.length is less than 2, if so return false
	if (arr.length < 2) return false
	//   initialize two variables, one pointing to the left of the array (0) and one pointing to the right of the array (arr.length - 1)
	let left = 0
	let right = arr.length - 1
	// loop over the array (while (left < right)) and check if arr[left] + arr[right] / 2 === targetAvg
	while (left < right) {
		let avg = (arr[left] + arr[right]) / 2
		if (avg === targetAvg) {
			return true
		} else if (avg < targetAvg) {
			left++
		} else {
			right--
		}
	}
	// initialize avg = arr[left] * arr[right] / 2
	// if it does, return true
	// if not && avg < targetAvg then left++
	// else right--
	// if loop ends without returning true, return false
	return false
}

// Coding Exercise 6: Multiple Pointers - isSubsequence

function isSubsequence(stringOne, stringTwo) {
	//   check if stringOne.length is > stringTwo.length, if so, return false
	if (stringOne.length > stringTwo.length) return false
	// create a tracker variable to track which letter we are currently on, initialize to 0
	let tracker = 0
	// loop over stringTwo
	for (let letter of stringTwo) {
		if ((tracker = stringOne.length)) {
			return true
		}
		if (letter === stringOne[tracker]) {
			tracker++
		}
	}
	// if tracker = stringOne.length
	// return true
	// check if stringTwo[i] === stringOne[tracker]
	// if true, tracker++
	// if loop ends, return false
	return false
}

// Coding Exercise 7: Sliding Window - maxSubarraySum

function maxSubarraySum(arr, num) {
	// if arr.length < num return false
	if (arr.length < num) return null
	// initialize two variables, left = 0 right = num - 1
	let left = 0
	let right = num - 1
	// initialize two more variables representing maxSum = 0 and tempSum = 0
	let maxSum = 0
	let tempSum = 0
	// loop over beginning of array based on num
	// for (let i = 0; i < num; i++) {
	// maxSum += arr[i]
	// }
	for (let i = 0; i < num; i++) {
		maxSum += arr[i]
	}
	// tempSum = maxSum
	tempSum = maxSum
	// loop over array with j starting at num
	for (let j = num; j < arr.length; j++) {
		tempSum = tempSum - arr[j - num] + arr[j]
		if (maxSum < tempSum) {
			maxSum = tempSum
		}
	}
	// tempSum = tempSum - arr[i - sum] + arr[i]
	// check if maxSum < tempSum
	// maxSum = tempSum

	// when loop ends, return maxSum
	return maxSum
}

// Coding Exercise 8: Sliding Window - minSubArrayLen

const minSubArrayLen = (arr, num) => {
	// check if array.length === 0, if so, return 0
	if (arr.length === 0) return 0
	// initialize two variables, start = 0 end = 0
	let start = 0
	let end = 0
	// initialize a variable sum = 0
	let sum = 0
	// initialize a variable minLength = Infinity
	let minLength = Infinity
	while (start < arr.length) {
		if (sum < num && end < arr.length) {
			sum += arr[end]
			end++
		} else if (sum >= num) {
			sum -= arr[start]
			if (minLength > end - start) {
				minLength = end - start
			}
			start++
		} else {
			break
		}
	}
	// loop over arr, while start <= arr.length
	// check if sum < num && end < arr.length
	// if true, sum += arr[end], end++
	// else if  sum >= num,
	// sum -= arr[start],
	// if minLength > end - start, minLength = end - start,
	// start++
	// else break
	return minLength === Infinity ? 0 : minLength
}
