function distanceFromHqInBlocks(value){
    let hq = 42;
    if (value > 42) {
        return value - 42;
    } else {
        return 42 - value; 

    }    
}

distanceFromHqInBlocks(43);

function distanceFromHqInFeet(value){
    distanceFromHqInBlocks(value);
    let hq1 = 264;
    return distanceFromHqInBlocks(value) * hq1; 

}

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(value1,value2){
    if (value2 > value1) {
        return (value2 - value1) * 264; 
    } else {
        return (value1- value2) * 264;

    }
}

distanceTravelledInFeet(43,48);
distanceTravelledInFeet(50,60);
distanceTravelledInFeet(34,28); 


function calculatesFarePrice(value1, value2) {
    let x = distanceTravelledInFeet(value1, value2);
    let y = x - 400;
    const price = 2500; 
    if (x < 400) {
      return 0;
     } else if (x >= 400 && x < 2000) {
       return y * 2 / 100;
     } else if (x >= 2000 && x < 2500) {
      return price / 100 ;
    } else {
      return 'cannot travel that far';
    }
  }
  calculatesFarePrice(43,44);
  calculatesFarePrice(34,32);
  calculatesFarePrice(50,58);
  calculatesFarePrice(34,24);