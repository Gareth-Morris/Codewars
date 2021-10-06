var min = function(list){
    
    list.sort(function(a, b){return a-b});
    
    var answer = list[0];
    
    return answer;
  }
  
  var max = function(list){
    
    list.sort(function(a, b){return a-b});
    
    var answer2 = list[list.length-1];
    
    return answer2;
  }