var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

function oneToMulti(array) {
  var numArr = [];
  var strArr = [];
  var booArr = [];
  var multiArr = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      strArr.push(array[i]);
    } else if (typeof array[i] === 'number') {
      numArr.push(array[i]);
    } else {
      booArr.push(array[i]);
    }
  }
  multiArr.push(numArr, strArr, booArr);
  return multiArr;
}

console.log(oneToMulti(myArray));
