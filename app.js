exports.charCount = str => str.length

exports.reverseStr = str => {
	const newArr = str.split('').reverse().join('')
	return newArr
}

