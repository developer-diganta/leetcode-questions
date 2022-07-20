/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = function(s, words) {
	let res = 0

	for (const w of words) {
		let index = -1
		let match = 0

		for (const c of w) {
			const currentIndex = s.indexOf(c, index + 1)

			if (currentIndex > index) {
				match++
				index = currentIndex
				continue
			}
			break
		}

		if (match === w.length) {
			res++
		}
	}

	return res
};