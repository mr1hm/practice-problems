
function sumArray(array){
  var sum = 0
  for(var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function fitWithinVal(array, numberToStopAt){
  var sum = 0;
  var testSum = 0;
  var numbersAddedArray = [];
  console.log(array);
  debugger;
  for (var i = 0; i < array.length; i++) {
    if (sum + array[i] > numberToStopAt && array[i] === array[array.length - 1]) {
      return numbersAddedArray;
    }
    if (sum + array[i] < numberToStopAt) {
      numbersAddedArray.push(array[i]);
      sum += array[i];
    } else if (sum + array[i + 1] < numberToStopAt) {
      numbersAddedArray.push(array[i + 1]);
      sum += array[i + 1];
    }
  }
  return numbersAddedArray;
}

function getAllNamesShorterThan(){

}

function makeLabel(){

}
