

function fibSequence(length) {
  var fibArr = [];
  for (var i = 0; i < length; i++) {
    if (i < 2) {
      fibArr.push(i);
      console.log(i);
    } else if (i > 2) {
      var nextNum = fibArr[i-2] + fibArr[i-1];
      fibArr.push(nextNum);
      console.log(nextNum);
    } else {
      var nextNum2 = fibArr[i-2] + fibArr[i-1];
      fibArr.push(nextNum2);
      console.log(nextNum2);
    }
  }
  console.log(fibArr);
}

fibSequence(12);
