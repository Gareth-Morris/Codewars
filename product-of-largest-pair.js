function maxProduct(a) {
  
    var answer = Math.max(...a);
    
    var newArray = a.filter(number => number !== answer);
    
    var nextLargestNumber = Math.max(...newArray);
    
    return answer * nextLargestNumber
      
    }