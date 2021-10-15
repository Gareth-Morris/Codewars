function multiTable(number) {
  
    var str = "";
    
    for (let i = 1; i <=10; i++){
     str += i + " * " + number + " = " + (i*number) + "\n"
    }
    var newStr = str.slice(0,-1)
    return newStr
  }