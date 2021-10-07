function powersOfTwo(n){
  
    var answer = [1];
    
    for (let i = 1; i <= n; i++){
      answer.push(Math.pow(2, i))
    }
    
    return answer;
  }