function isPalindrome(x) {
  
    var newStr = "";
    
    for (let i = x.length-1; i >= 0; i--){
      newStr += x[i]
    }
    
      if (newStr.toLowerCase() == x.toLowerCase()){
        return true
      }
        return false 
    }