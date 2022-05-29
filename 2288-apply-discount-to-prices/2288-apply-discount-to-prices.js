/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function(sentence, discount) {
    var t = sentence.split(" ");
    var x=[];
    var d = discount/100;
    for(var i=0;i<t.length;i++){
        //here it is checked whether $is followed by only numbers
        if(t[i].replace(/[^$]/g, "").length===1 && t[i][0]==="$" && t[i].length>1){
            var y=t[i].substring(1);
            var g = parseFloat(y-(y*d)).toFixed(2);
            console.log(parseFloat(y).toFixed(2));
            console.log(g)
            if(isNaN(g))
                x.push(t[i]);
            else
               x.push("$"+g);
        }
        else 
            x.push(t[i]);
    }
    return x.join(" ");
};