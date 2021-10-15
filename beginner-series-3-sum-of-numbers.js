function getSum( a,b ){
    var answer = 0;
     
    if (a < b) {
       for (var i = a; i <= b; i++){
         answer += i;
       }
      return answer;
    }
    
    else if (b < a){
      for (var i = b; i <= a; i++){
        answer += i;
      }
      return answer
    }
      
    else if (a === b) {
      return a
    }
     
    }