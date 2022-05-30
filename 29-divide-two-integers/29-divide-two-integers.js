/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
     let INT_MAX =(2**31)-1, INT_MIN = -(2**31) 
     if(dividend==INT_MIN && divisor==-1) return INT_MAX
     if(dividend==INT_MIN && divisor== 1) return INT_MIN
	 let double = 0, count = 0, res = 0

     let sign = dividend<0 ^ divisor<0     
     dividend = Math.abs(dividend)
     divisor = Math.abs(divisor)

     while (divisor <= dividend) {
        let double = divisor, count = 1

        while( (double*2) <= dividend) {
            double = double*2
            count  = count*2
        }
        res = res + count 
        dividend = dividend - double
    }
    return sign ? -res : res
};
    



