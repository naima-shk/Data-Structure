var isPalindrome = function(x) {
    return true 
 
 palindrome('121');
 };

 function isNumPalindrome(num) {
    //WITHOUT toString()
    if (num < 0 || num % 10 === 0 && num !== 0) {
      return false;
    }
    
    var roundUp = function(num, precision) {
    precision = Math.pow(10, precision);
    return Math.ceil(num * precision) / precision;
    };
    
    var revertedNum = 0;
    while (num > revertedNum) {
      revertedNum = Math.floor(revertedNum * 10 + num % 10);
      num = Math.floor(num / 10);
    }
    return Math.floor(num) === Math.floor(revertedNum) || Math.floor(num) == Math.floor(revertedNum / 10);
  }
   isNumPalindrome(121);