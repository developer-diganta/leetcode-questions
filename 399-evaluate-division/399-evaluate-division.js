/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
	const roots = {}, res = [], n = equations.length;

	for (let equation of equations) {
		roots[equation[0]] = [equation[0], 1];
		roots[equation[1]] = [equation[1], 1];    
	}

	for (let i = 0; i < n; i++) {
		let [u, v] = equations[i];
		let value = values[i];

		let [x, vx] = find(u);
		let [y, vy] = find(v);

		if (x !== y) {
			roots[x] = [y, vy*value/vx];
		}
	}

	for (let [u, v] of queries) {
		if (roots[u] === undefined || roots[v] === undefined) {
			res.push(-1);
			continue;
		}

		let [x, vx] = find(u);
		let [y, vy] = find(v);

		if (x !== y) res.push(-1);
		else {
			res.push(vx / vy);
		}
	}

	return res;

	function find(x) {
		let value = 1;
		while (roots[x] && roots[x][0] !== x) {
			value *= roots[x][1];
			x = roots[x][0];
		}

		return [x, value];
	}
};