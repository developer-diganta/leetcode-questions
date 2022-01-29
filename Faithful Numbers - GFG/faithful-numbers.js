// { Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.nthFaithfulNum(n);
        console.log(res);
        
    }
}// } Driver Code Ends

// } Driver Code Ends


//User function Template for javascript



/**
 * @param {number} n
 * @returns {number}
*/

class Solution{
    nthFaithfulNum(n){
            var b=1;
    var ans=0;
    while(n>0){
        var lastDigit=n&1;
        n=n>>1;
        if(lastDigit)
        ans+=b;
        b=b*7;
    }
    return ans;
    }
}

