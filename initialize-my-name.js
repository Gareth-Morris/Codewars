function initializeNames(name){
  
    var arr = name.split(" ");
    
    if (arr.length <= 2){
      return name
    }
    
    if (arr.length > 2){
      
      var newArr = [];
      newArr.push(arr[0]);
      
      for (let i = 1; i < arr.length-1; i++){
      newArr.push(arr[i].charAt(0)+".")
      }
      
      newArr.push(arr[arr.length-1])
      
      var newStr = newArr.toString().replace(/,/g, " ")
      
      return newStr 
    }
  }