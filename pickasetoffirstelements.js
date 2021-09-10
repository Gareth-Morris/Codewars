/*
Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

If n == 0 return an empty sequence []
*/

function first(arr, n) {
  
    var newArr = []
     
    if (n == 0){
        return []
        }
    
    if (n == undefined){
       return arr.slice(0,1)
       }
    
    if (n <= arr.length){  
    for (let i = 0; i < n; i++){
       newArr.push(arr[i])
    }
      return newArr
    }
   return arr
  }