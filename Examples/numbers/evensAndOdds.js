// Odd and even numbers
function showOddsAndEvens (num) {
    for (let i = 0; i <= num; i ++) {
      const message = (i % 2 === 0) ? "EVEN" : "ODD";
      console.log(i, message);
    }
  }
showOddsAndEvens(5)