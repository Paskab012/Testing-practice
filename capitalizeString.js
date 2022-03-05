exports.capitalizeCharAt = (str, index = 0) => {
  return (
		str.split('').slice(0, index).join('').toLowerCase() +
		str.charAt(index).toUpperCase() +
		str
			.split('')
			.slice(index + 1)
			.join('')
			.toLowerCase()
	)
}
