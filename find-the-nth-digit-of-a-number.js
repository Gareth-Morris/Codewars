var findDigit = function(num, nth){
    
    if (nth < 1){
      return -1
    }
    
    if (num < 0){
       var p = -num
    } else {
      p = num
    }
     
   var n = p.toString().split('')
   
     if (nth > n.length){
      return 0
    }
   
    return parseInt(n[n.length-nth])
  }