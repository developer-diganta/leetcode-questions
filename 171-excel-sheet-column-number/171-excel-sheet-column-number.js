/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
        var  result = 0;
        for(var i=0;i<columnTitle.length;i++)
        {
            var d = columnTitle.charCodeAt(i) -64;
        console.log(d)
            result = result * 26 + d;
        }
        return result;
};