var myArray = ['hello', 45, 'Bob', 'what', '23'];

function totalReverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(totalReverse(myArray));
