/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
	let i = s.length - 1, j = t.length - 1, sb = 0, tb = 0;

	while (i >= 0 || j >= 0) {
		if (s[i] == "#") {
			sb++;
			i--;
			continue;
		}

		if (t[j] == "#") {
			tb++;
			j--;
			continue;
		}

		if (sb) {
			sb--;
			i--;
			continue;
		}

		if (tb) {
			tb--;
			j--;
			continue;
		}

		if (s[i] != t[j]) {
			return false;
		}
        
		i--;
		j--;
	}

	return true;
};