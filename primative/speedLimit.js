// demerit point
// speed limit = 70
// for every 5 mph abouve => 1 point
// Math.floor(1.3) => 1
// more than 12 points => liscence is suspended
function checkSpeed(speed){
    const speedLimit = 70;
    const mphPoint = 5;
  
    if(speed < speedLimit + mphPoint){
      console.log('OK');
      return;
      }
      const points = Math.floor((speed- speedLimit) / mphPoint);
      if (points >= 12)
        console.log("licese Suspended")
      else
        console.log('Points', points)
    }
checkSpeed(60)
checkSpeed(82)
checkSpeed(142)
