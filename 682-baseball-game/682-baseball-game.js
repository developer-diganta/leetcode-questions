/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
   var arr=[];
   for(let i of ops){
     if(i==='C'){arr.pop();}
     else if(i==='D'){
         arr.push(arr[arr.length-1]*2);
     }
     else if(i==='+'){
         arr.push(arr[arr.length-1]+arr[arr.length-2]);
     }
     else{arr.push(1*i);}
   }
   return arr.reduce((a,b)=>a+b);
};