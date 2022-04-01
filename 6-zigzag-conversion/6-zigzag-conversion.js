/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let row = 0, index = 0, arr = [];
    while(index < s.length) {
        let row = 0;
        while (row < numRows && index < s.length) {
            arr[row] ? arr[row]+=s.charAt(index) : arr.push(s.charAt(index));
            index++;
            row++;
        }
        row = numRows - 2;
        while (row > 0 && index < s.length) {
            arr[row]+=s.charAt(index);
            index++;
            row--;
        }
    }
    return arr.reduce((prev, cur) => prev + cur, "")
};