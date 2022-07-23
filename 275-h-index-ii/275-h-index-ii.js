/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    
    if (citations.length==0)  return 0;
    
    let left =0;
    let right=citations.length-1;
    while (left<right) {
        let mid = Math.floor((left+right)/2); 
        if (citations[mid]==citations.length-mid) return citations.length - mid; 
        if (citations[mid]>citations.length-mid) right = mid;    
        else left = mid+1;   
    }
    
    if (citations[left] >= citations.length-left) return citations.length-left;
    if (citations[right] >= citations.length-right) return citations.length-right;
    return 0;
    
};