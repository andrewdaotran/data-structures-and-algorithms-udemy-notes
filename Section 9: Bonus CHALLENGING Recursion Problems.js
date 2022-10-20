// Coding Exercise 16: isPalindrome

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
function isPalindrome(str) {
	//   create a variable called palindrome that is an empty string
	let palindrome = ''
	// create a new variable that is a copy of str
	let strCopy = str.slice()
	// create helper function
	// check if strCopy === 1, if so return str[0]
	// add last letter to palindrome
	// return helper and pass in strCopy.slice(0, -1)
	const helper = (str) => {
		if (str.length === 1) return (palindrome += str[0])
		palindrome += str[str.length - 1]
		return helper(str.slice(0, -1))
	}
	helper(strCopy)
	return str === palindrome
}

// Coding Exercise 17: someRecursive

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callback) {
	// pass arr[0] into callback
	// if arr.length === 0, return false
	// if callback(arr[0]) === true, return true
	// if not, return someRecursive(arr.splice(1, callback))

	if (arr.length === 0) return false
	if (callback(arr[0])) {
		return true
	}
	return someRecursive(arr.splice(1), callback)
}

// Coding Exercise 18: flatten

function flatten(arr) {
	// add whatever parameters you deem necessary - good luck!

	//   initialize an empty array
	let newArr = []

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			newArr = newArr.concat(flatten(arr[i]))
		} else {
			newArr.push(arr[i])
		}
	}
	// loop over arr
	// check if arr[i] is an array, if so
	// newArr = newArr.concat(flatten(arr[i]))
	// if arr is not an array
	// newArr.push(arr[i])

	return newArr
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

// Coding Exercise 19: capitalizeFirst

D

// Coding Exercise 20: nestedEvenSum
function nestedEvenSum(obj) {
	//   initialize a variable total = 0
	let total = 0
	//   loop over object
	// check if typeof obj[key] === object
	// if yes, total = nestedEvenSum(obj[key])
	// if not AND typeof === number
	// total += obj[key]
	for (let key in obj) {
		if (typeof obj[key] === 'object') {
			total = total + nestedEvenSum(obj[key])
		} else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
			total += obj[key]
		}
	}
	return total
}
var obj1 = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: 'yup',
		},
	},
}
var obj2 = {
	a: 2,
	b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
	c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
	d: 1,
	e: { e: { e: 2 }, ee: 'car' },
}

nestedEvenSum(obj1) // 6
nestedEvenSum(obj2) // 10

// Coding Exercise 21: capitalizeWords

function capitalizeWords(arr) {
	// initialize an empty arr called newArr
	let newArr = []
	// iterative solution
	//   loop over arr
	//  newArr.pusht(value.toUppercase()

	//   check if arr.length === 1, if so return arr[0].toUpperCase
	if (arr.length === 1) {
		return arr[0].toUpperCase()
	} else {
		newArr.push(arr[0].toUpperCase())
		return newArr.concat(capitalizeWords(arr.splice(1)))
	}
	// newArr.push(arr.pop().toUpperCase())
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// Coding Exercise 22: stringifyNumbers

/*
let obj = {
   num: 1,
   test: [],
   data: {
       val: 4,
       info: {
           isRight: true,
           random: 66
       }
   }
}
/*
 
stringifyNumbers(obj)
 
/*
{
   num: "1",
   test: [],
   data: {
       val: "4",
       info: {
           isRight: true,
           random: "66"
       }
   }
}
*/

const stringifyNumbers = (obj) => {
	// initialize an empty object called newObj
	let newObj = {}

	// loop over newObj
	// check if typeof obj[key] === 'object'
	// if so, stringifyNumbers(obj[key])
	// else if typeof obj[key] === 'number'
	// String(obj[key])

	for (let key in obj) {
		if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			newObj[key] = stringifyNumbers(obj[key])
		} else if (typeof obj[key] === 'number') {
			newObj[key] = String(obj[key])
		} else {
			newObj[key] = obj[key]
		}
	}
	return newObj
}

// Coding Exercise 23: collectStrings

// Pure recursive solution

// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

// collectStrings(obj) // ["foo", "bar", "baz"])

const collectStrings = (obj) => {
	// initialize an empty arr called arr
	let arr = []

	// loop over obj
	// check if typeof obj[key] === 'object' && !Array.isArray(obj[key)
	// if so, collectStrings(obj[key])
	//else if typeof obj[key] === 'string'
	// arr.concat([obj[key]])
	for (let key in obj) {
		if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			arr = arr.concat(collectStrings(obj[key]))
		} else if (typeof obj[key] === 'string') {
			arr.push(obj[key])
		}
	}
	return arr
}

// Helper function solution

const collectStrings2 = (obj) => {
	// initialize an empty arr
	let arr = []

	// create a helper function that takes in an obj
	// loop over obj
	// check if type of obj[key] === 'object' && !Array.isArray(value)
	// if so, run helper(obj[key])
	// if type of obj[key] === 'string'
	// arr.push(obj[key])

	const helper = (obj) => {
		for (let key in obj) {
			if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
				helper(obj[key])
			} else if (typeof obj[key] === 'string') {
				arr.push(obj[key])
			}
		}
	}
	// run helper function with obj passed in
	helper(obj)

	return arr
}
