function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let sum=0;
    for (let i=0;i<arrayOfSheep.length;i++){
      if (arrayOfSheep[i]){
        sum+=1;
      }
    }return sum;
  
  }