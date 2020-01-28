//Brute First Approach
let lengthOfLongestSubstring = function(s) {
      let count=0;
     
      for (let i=0; i<s.length; i++){
         let char= s.charAt(i);
         let set = new Set ([char]);
     
      for (let j=i+1; j<s.length; j++){
          let char=s.charAt(j);
          
         if (set.has(char)){
             break;
         } else {
                 set.add(char);
             }
              count=Math.max(count, set.size);
         }
      }
     return count;
};

//Sliding window 
let  lengthOfLongestSubstring = function(s) {
    let count=0;
    let i=0;
    let j=0;
    let set = new Set();
    let n=s.length;
    
    while (i <n &&  j<n){
        let char = s. charAt(j);
        if (!set.has(char)){
            set.add(char);
            j++;
            count =Math.max(count, j-i);
        } else {
            set.delete(s.charAt(i));
             i++;
        }
    }
   return count;
   
};