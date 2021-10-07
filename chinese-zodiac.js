function chineseZodiac(year){
  
    let currentYear = year - 1924;
    let currentAnimalNumber = currentYear % 12;
    let currentElementNumber = Math.floor((currentYear % 10)/2);
    
    return elements[currentElementNumber]+" "+animals[currentAnimalNumber];
  }