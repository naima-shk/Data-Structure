var isPalindrome = function (num) {
  var numberAux= num
   var reversedNumber=0
    
    while (numberAux>0){
        var rightDigit=Math.floor(numberAux %10)
        reversedNumber=reversedNumber *10 +rightDigit
        numberAux= Math.floor (numberAux/10)
    }
    if (num == reversedNumber){
        return true
    } else {
            return false
    
  } 
}
 
    