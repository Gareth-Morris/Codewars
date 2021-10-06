function getMiddle(s){
  
    if (s.length % 2 === 0){
    
      var newStr = s.split("")
        
      var firstHalf = []
      var secondHalf = []
    
      for (let i = 0; i < s.length/2; i++){
        firstHalf.push(s[i])
      } 
  
      for (let j = s.length/2; j < s.length; j++){
        secondHalf.push(s[j])
      }  
  
      var answer = firstHalf[firstHalf.length-1] + secondHalf[0]
      return answer
      }
    
    if (s.length % 2 !== 0){
    
    var str = s.split("")
    var middLetIndex = (str.length/2)-0.5
    var result = str[middLetIndex]
    return result
  }
}