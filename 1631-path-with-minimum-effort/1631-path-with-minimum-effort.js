/**

@param {number[][]} heights
@return {number}
*/
const DIR = [[1,0],[0,1],[-1,0],[0,-1]];
var minimumEffortPath = function(h) {
const n = h.length, m = h[0].length;
let v = [], min = 0, max = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (h[i][j-1]) {
            max = Math.max(max, Math.abs(h[i][j]-h[i][j-1]));
        }
        if (h[i-1]) {
            max = Math.max(max, Math.abs(h[i][j]-h[i-1][j]));
        }
    }
}

function check(i, j, k) {
    if ((i === n - 1) && (j === m - 1)) {
        return true;
    }
    
    v[i*m+j] = true;
    
    for (const [x, y] of DIR) {
        if (h[i+x] && h[i+x][j+y] && !v[(i+x)*m+j+y] && (Math.abs(h[i+x][j+y] - h[i][j]) <= k)) {
            if (check(i+x, j+y, k)) {
                return true;
            }
        }
    }
    
    return false;
}

while (min < max-1) {
    let mid = Math.floor((max + min) / 2);
    v = [];
    
    if (check(0, 0, mid)) {
        max = mid;
    } else {
        min = mid;
    }
}

return check(0,0,min) ? min : max;
};